/*
 * Synthetic reverberator simulator
 *
 * Washy and synthetic reverb, sounds gorgeous when modulated.
 * The core architecture is two channels of allpass filter series
 * terminated by delays with their feedbacks crossed as described by Keith Barr at Spin Semiconductor
 * (http://www.spinsemi.com/knowledge_base/effects.html#Reverberation)
 *
 * The algorithm is based on NI Reaktor Metaverb.
 * Metaverb is a reverb effect from the ensemble "Cha Osc" by Stephan Schmitt.
 */

declare name "fig8verb";
declare author "Marek Wiewiorski";
declare version "0.4";
declare license "MIT";

import("stdfaust.lib");

size_scale(0) = 0.506392;
size_scale(1) = 0.803821;
size_scale(2) = 1;
size_scale(3) = 1.49834;

fig8verb(
  max_dtime,
  size,
  diffusion,
  feedback_gain,
  lfo_freq,
  lfo_amount,
  hs_gain,
  hs_freq,
  ls_gain,
  ls_freq) = (route_in : +,+ : core) ~ feedback with {
    route_in = route(4, 4, (1, 3), (2, 2), (3, 1), (4, 4));

    filter_hs = fi.highshelf(1, hs_gain, hs_freq);
    filter_ls = fi.lowshelf(1, ls_gain, ls_freq);
    filter = filter_hs : filter_ls;

    lfo_phase(i) = ma.PI/4 * i;
    lfo(i) = lfo_amount * os.oscp(lfo_freq, lfo_phase(i));

    dtime(ch, i) = (size_scale(i) * size) * (1 + lfo(ch*i));

    allpass(ch, i) = fi.allpass_fcomb(max_dtime, dtime(ch, i), diffusion);

    diffusor(ch) = filter : seq(i, 3, allpass(ch, i));
    delay(ch) = de.fdelay(max_dtime, dtime(ch, 3));

    feedback = par(i, 2, delay(i) * feedback_gain);
    core = par(i, 2, diffusor(i));
};

fig8verb_ui = (_,_) <: ((_, _), fig8verb(
  max_dtime,
  size,
  diffusion,
  feedback,
  lfo_freq,
  lfo_amount,
  hs_gain,
  hs_freq,
  ls_gain,
  ls_freq)) : route(4, 4, (1, 1), (2, 3), (3, 2), (4, 4)) : par(i, 2, si.interpolate(mix)) with {
    max_dtime = 5000;

    general_group(x) = hgroup("[0] General [tooltip:General controls]", x);
    mix = general_group(vslider("[0] Mix [unit:%] [tooltip:Mix] [style:knob]", 100, 0, 100, 0.1)) * 0.01;

    size = general_group(vslider("[1] Size [unit:%] [tooltip:Scale size in percents] [style:knob]", 60, 0, 100, 0.1)) * 0.01 * max_dtime : si.smooth(0.99);
    feedback = general_group(vslider("[2] Feedback [unit:%] [tooltip:Feedback amount] [style:knob]", 60, 0, 100, 0.1)) * 0.01;
    diffusion = general_group(vslider("[3] Diffusion [unit:%] [tooltip:Diffusion amount] [style:knob]", 66, 0, 100, 0.1)) * 0.01;

    damping_group(x) = hgroup("[1] Damping [tooltip:Damping filters in the feedback loop]", x);
    hs_gain = damping_group(hslider("[0] HighShelf [unit:dB] [tooltip:High shelf gain] [style:knob]", 0, -24, 24, 0.1));
    hs_freq = damping_group(hslider("[1] HighFreq [unit:Hz] [style:knob] [tooltip:High shelf frequency] [scale:log]", 4000, 500, 10000, 10));
    ls_gain = damping_group(hslider("[2] LowShelf [unit:dB] [tooltip:Low shelf gain] [style:knob]", 0, -24, 24, 0.1));
    ls_freq = damping_group(hslider("[3] LowFreq [unit:Hz] [tooltip:Low Shelf Frequency] [style:knob] [scale:log]", 100, 100, 4000, 10));

    modulation_group(x) = hgroup("[2] Modulation [tooltip:Control over modulation of delay times] [style:knob]", x);
    lfo_freq = modulation_group(vslider("[0] Rate [unit:Hz] [tooltip:Modulation LFO frequency] [style:knob]", 0.7, 0, 10, 0.1));
    lfo_amount = modulation_group(vslider("[1] Depth [unit:%] [tooltip:Modulation LFO amount] [style:knob]", 0.3, 0, 5, 0.6)) * 0.01;
};

process = fig8verb_ui;
