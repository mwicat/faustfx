
/*
Code generated with Faust version 2.40.12
Compilation options: -lang wasm-ib -cn fig8verb -es 1 -mcd 16 -single -ftz 2 
*/

function getJSONfig8verb() {
	return '{"name": "fig8verb","filename": "fig8verb.dsp","version": "2.40.12","compile_options": "-lang wasm-ib -cn fig8verb -es 1 -mcd 16 -single -ftz 2","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/981ECC7C6886CA74524614A6B4454F3E0AC14D9F/web/wap"],"size": 786680,"inputs": 2,"outputs": 2,"meta": [ { "analyzers_lib_name": "Faust Analyzer Library" },{ "analyzers_lib_version": "0.2" },{ "author": "Marek Wiewiorski" },{ "basics_lib_name": "Faust Basic Element Library" },{ "basics_lib_version": "0.8" },{ "compile_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "delays_lib_name": "Faust Delay Library" },{ "delays_lib_version": "0.1" },{ "filename": "fig8verb.dsp" },{ "filters_lib_allpass_fcomb_author": "Julius O. Smith III" },{ "filters_lib_allpass_fcomb_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_allpass_fcomb_license": "MIT-style STK-4.3 license" },{ "filters_lib_filterbank_author": "Julius O. Smith III" },{ "filters_lib_filterbank_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_filterbank_license": "MIT-style STK-4.3 license" },{ "filters_lib_highpass_author": "Julius O. Smith III" },{ "filters_lib_highpass_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_highshelf_author": "Julius O. Smith III" },{ "filters_lib_highshelf_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_highshelf_license": "MIT-style STK-4.3 license" },{ "filters_lib_lowpass0_highpass1": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_lowpass0_highpass1_author": "Julius O. Smith III" },{ "filters_lib_lowpass_author": "Julius O. Smith III" },{ "filters_lib_lowpass_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_lowpass_license": "MIT-style STK-4.3 license" },{ "filters_lib_lowshelf_author": "Julius O. Smith III" },{ "filters_lib_lowshelf_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_lowshelf_license": "MIT-style STK-4.3 license" },{ "filters_lib_name": "Faust Filters Library" },{ "filters_lib_tf1_author": "Julius O. Smith III" },{ "filters_lib_tf1_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_tf1_license": "MIT-style STK-4.3 license" },{ "filters_lib_tf1s_author": "Julius O. Smith III" },{ "filters_lib_tf1s_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_tf1s_license": "MIT-style STK-4.3 license" },{ "filters_lib_version": "0.3" },{ "library_path0": "/libraries/stdfaust.lib" },{ "library_path1": "/libraries/signals.lib" },{ "library_path2": "/libraries/filters.lib" },{ "library_path3": "/libraries/analyzers.lib" },{ "library_path4": "/libraries/basics.lib" },{ "library_path5": "/libraries/maths.lib" },{ "library_path6": "/libraries/platform.lib" },{ "library_path7": "/libraries/oscillators.lib" },{ "library_path8": "/libraries/delays.lib" },{ "license": "MIT" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.5" },{ "name": "fig8verb" },{ "oscillators_lib_name": "Faust Oscillator Library" },{ "oscillators_lib_version": "0.3" },{ "platform_lib_name": "Generic Platform Library" },{ "platform_lib_version": "0.2" },{ "signals_lib_name": "Faust Signal Routing Library" },{ "signals_lib_version": "0.3" },{ "version": "2.44.5" }],"ui": [ {"type": "vgroup","label": "fig8verb","items": [ {"type": "hgroup","label": "General","meta": [{ "0": "" },{ "tooltip": "General controls" }],"items": [ {"type": "vslider","label": "Mix","shortname": "Mix","address": "/fig8verb/General/Mix","index": 524288,"meta": [{ "0": "" },{ "style": "knob" },{ "tooltip": "Mix" },{ "unit": "%" }],"init": 100,"min": 0,"max": 100,"step": 0.1},{"type": "vslider","label": "Size","shortname": "Size","address": "/fig8verb/General/Size","index": 524316,"meta": [{ "1": "" },{ "style": "knob" },{ "tooltip": "Scale size in percents" },{ "unit": "%" }],"init": 60,"min": 0,"max": 100,"step": 0.1},{"type": "vslider","label": "Feedback","shortname": "Feedback","address": "/fig8verb/General/Feedback","index": 524308,"meta": [{ "2": "" },{ "style": "knob" },{ "tooltip": "Feedback amount" },{ "unit": "%" }],"init": 60,"min": 0,"max": 100,"step": 0.1},{"type": "vslider","label": "Diffusion","shortname": "Diffusion","address": "/fig8verb/General/Diffusion","index": 524404,"meta": [{ "3": "" },{ "style": "knob" },{ "tooltip": "Diffusion amount" },{ "unit": "%" }],"init": 66,"min": 0,"max": 100,"step": 0.1}]},{"type": "hgroup","label": "Damping","meta": [{ "1": "" },{ "tooltip": "Damping filters in the feedback loop" }],"items": [ {"type": "hslider","label": "HighShelf","shortname": "HighShelf","address": "/fig8verb/Damping/HighShelf","index": 524364,"meta": [{ "0": "" },{ "style": "knob" },{ "tooltip": "High shelf gain" },{ "unit": "dB" }],"init": 0,"min": -24,"max": 24,"step": 0.1},{"type": "hslider","label": "HighFreq","shortname": "HighFreq","address": "/fig8verb/Damping/HighFreq","index": 524304,"meta": [{ "1": "" },{ "scale": "log" },{ "style": "knob" },{ "tooltip": "High shelf frequency" },{ "unit": "Hz" }],"init": 4000,"min": 500,"max": 10000,"step": 10},{"type": "hslider","label": "LowShelf","shortname": "LowShelf","address": "/fig8verb/Damping/LowShelf","index": 524392,"meta": [{ "2": "" },{ "style": "knob" },{ "tooltip": "Low shelf gain" },{ "unit": "dB" }],"init": 0,"min": -24,"max": 24,"step": 0.1},{"type": "hslider","label": "LowFreq","shortname": "LowFreq","address": "/fig8verb/Damping/LowFreq","index": 524300,"meta": [{ "3": "" },{ "scale": "log" },{ "style": "knob" },{ "tooltip": "Low Shelf Frequency" },{ "unit": "Hz" }],"init": 100,"min": 100,"max": 4000,"step": 10}]},{"type": "hgroup","label": "Modulation","meta": [{ "2": "" },{ "style": "knob" },{ "tooltip": "Control over modulation of delay times" }],"items": [ {"type": "vslider","label": "Rate","shortname": "Rate","address": "/fig8verb/Modulation/Rate","index": 524336,"meta": [{ "0": "" },{ "style": "knob" },{ "tooltip": "Modulation LFO frequency" },{ "unit": "Hz" }],"init": 0.7,"min": 0,"max": 10,"step": 0.1},{"type": "vslider","label": "Depth","shortname": "Depth","address": "/fig8verb/Modulation/Depth","index": 524328,"meta": [{ "1": "" },{ "style": "knob" },{ "tooltip": "Modulation LFO amount" },{ "unit": "%" }],"init": 0.3,"min": 0,"max": 5,"step": 0.6}]}]}]}';
}
function getBase64Codefig8verb() { return "AGFzbQEAAAAB4ICAgAASYAJ/fwBgBH9/f38AYAF9AX1gAX8Bf2ABfwF/YAJ/fwF9YAF/AX9gAn9/AGABfwBgAn9/AGACf38AYAF/AGACf38Bf2ACf38Bf2ACfX0BfWADf399AGABfQF9YAF9AX0CsYCAgAAEA2VudgVfY29zZgACA2VudgVfcG93ZgAOA2VudgVfc2luZgAQA2VudgVfdGFuZgARA4+AgIAADgABAwQFBgcICQoLDA0PBYyAgIAAAQGQgICAAPiHgIAAB7qBgIAADAdjb21wdXRlAAUMZ2V0TnVtSW5wdXRzAAYNZ2V0TnVtT3V0cHV0cwAHDWdldFBhcmFtVmFsdWUACA1nZXRTYW1wbGVSYXRlAAkEaW5pdAAKDWluc3RhbmNlQ2xlYXIACxFpbnN0YW5jZUNvbnN0YW50cwAMDGluc3RhbmNlSW5pdAANGmluc3RhbmNlUmVzZXRVc2VySW50ZXJmYWNlAA4Nc2V0UGFyYW1WYWx1ZQARBm1lbW9yeQIACruzgIAADr+DgIAAAQZ/QQAhBEEAIQdBACECQQAhA0EAIQIDQAJAQdiBMCACQQJ0akEANgIAIAJBAWohAiACQQJIBEAMAgwBCwsLQQAhAwNAAkBB4IEwIANBAnRqQQA2AgAgA0EBaiEDIANBAkgEQAwCDAELCwtBACEEA0ACQEEAQQE2AtiBMEEAQQAoAtyBMEEAKALkgTBqQYCABG82AuCBMCAEQQJ0Q9sPyThBACgC4IEwspQQADgCAEEAQQAoAtiBMDYC3IEwQQBBACgC4IEwNgLkgTAgBEEBaiEEIARBgIAESARADAIMAQsLC0EAIQVBACEGQQAhBQNAAkBB6IEwIAVBAnRqQQA2AgAgBUEBaiEFIAVBAkgEQAwCDAELCwtBACEGA0ACQEHwgTAgBkECdGpBADYCACAGQQFqIQYgBkECSARADAIMAQsLC0EAIQcDQAJAQQBBATYC6IEwQQBBACgC7IEwQQAoAvSBMGpBgIAEbzYC8IEwQYCAECAHQQJ0akPbD8k4QQAoAvCBMLKUEAI4AgBBAEEAKALogTA2AuyBMEEAQQAoAvCBMDYC9IEwIAdBAWohByAHQYCABEgEQAwCDAELCwsLyqGAgAACJH9VfUEAIQRBACEFQQAhBkEAIQdDAAAAACEoQwAAAAAhKUMAAAAAISpDAAAAACErQwAAAAAhLEMAAAAAIS1DAAAAACEuQwAAAAAhL0MAAAAAITBDAAAAACExQwAAAAAhMkMAAAAAITNDAAAAACE0QwAAAAAhNUMAAAAAITZDAAAAACE3QwAAAAAhOEMAAAAAITlDAAAAACE6QwAAAAAhO0EAIQhDAAAAACE8QwAAAAAhPUMAAAAAIT5BACEJQwAAAAAhP0MAAAAAIUBDAAAAACFBQQAhCkMAAAAAIUJBACELQQAhDEEAIQ1DAAAAACFDQwAAAAAhREMAAAAAIUVDAAAAACFGQwAAAAAhR0MAAAAAIUhDAAAAACFJQwAAAAAhSkMAAAAAIUtDAAAAACFMQQAhDkEAIQ9BACEQQwAAAAAhTUMAAAAAIU5DAAAAACFPQQAhEUEAIRJBACETQwAAAAAhUEMAAAAAIVFDAAAAACFSQwAAAAAhU0MAAAAAIVRDAAAAACFVQQAhFEMAAAAAIVZBACEVQQAhFkEAIRdDAAAAACFXQwAAAAAhWEMAAAAAIVlDAAAAACFaQwAAAAAhW0EAIRhDAAAAACFcQQAhGUEAIRpBACEbQwAAAAAhXUMAAAAAIV5DAAAAACFfQwAAAAAhYEMAAAAAIWFDAAAAACFiQQAhHEMAAAAAIWNBACEdQQAhHkEAIR9DAAAAACFkQwAAAAAhZUMAAAAAIWZDAAAAACFnQwAAAAAhaEMAAAAAIWlDAAAAACFqQwAAAAAha0MAAAAAIWxDAAAAACFtQwAAAAAhbkMAAAAAIW9DAAAAACFwQQAhIEMAAAAAIXFBACEhQQAhIkEAISNDAAAAACFyQwAAAAAhc0MAAAAAIXRDAAAAACF1QwAAAAAhdkMAAAAAIXdBACEkQwAAAAAheEEAISVBACEmQQAhJ0MAAAAAIXlDAAAAACF6QwAAAAAhe0MAAAAAIXwgAkEAaigCACEEIAJBBGooAgAhBSADQQBqKAIAIQYgA0EEaigCACEHQwrXIzxBACoCgIAglCEoQQAqAoiAIEEAKgKMgCCUEAMhKUMAAIA/ICmVISogKkMAAIA/kiErQwAAAABDAACAPyApICuUlZMhLEEAKgKIgCBBACoCkIAglBADIS1DAACAPyAtlSEuIC5DAACAP5IhL0MAAIA/IC+VITBDAACAPyAukyExQwrXIzxBACoClIAglCEyQwAAAD9BACoCnIAglCEzQwrXIzxBACoCqIAglCE0QQAqAqyAIEEAKgKwgCCUITVDAAAgQUPNzEw9QQAqAsyAIJQQASE2QwAAAABDAACAPyAtIC+UlZMhN0MAAIA/ICuVIThDAACAPyAqkyE5QwAAIEFDzcxMPUEAKgLogCCUEAEhOkMK1yM8QQAqAvSAIJQhO0EAIQgDQAJAIAQgCGoqAgAhPCAzQ6RwfT9BACoCpIAglJIhPUEAID28QYCAgPwHcQR9ID0FQwAAAAALOAKggCAgNUEAKgK4gCAgNUEAKgK4gCCSjpOSIT5BACA+vEGAgID8B3EEfSA+BUMAAAAACzgCtIAgQwAAgEdBACoCtIAglKghCSAJQQJ0KgIAIT9BgIAQIAlBAnRqKgIAIUBDm8m/P0EAKgKggCAgNEPzBDU/ID+UQ/MENT8gQJSTlEMAAIA/kpSUIUEgQaghCiBBjiFCIApBAWohC0EAIApIBH8gCgVBAAshDEEAIAtIBH8gCwVBAAshDSA8IDJB2IEuQQAoApiAIEGJJyAMSAR/QYknBSAMC0EBamtB/z9xQQJ0aioCACBCQwAAgD8gQZOSlCBBIEKTQdiBLkEAKAKYgCBBiScgDUgEf0GJJwUgDQtBAWprQf8/cUECdGoqAgCUkpSSIUNBACBDOAK8gCBDAAAAACAwIDFBACoCyIAglCBDQQAqAsCAIJKTlJMhREEAIES8QYCAgPwHcQR9IEQFQwAAAAALOALEgCAgN0EAKgLAgCCUIDAgMUEAKgLUgCCUIC4gQ5STlJMhRUEAIEW8QYCAgPwHcQR9IEUFQwAAAAALOALQgCBBACoCxIAgIDZBACoC0IAglJIhRkEAIEY4AtiAICAsQQAqAtyAIJQgOCA5QQAqAuSAIJQgKiBGlJOUkyFHQQAgR7xBgICA/AdxBH0gRwVDAAAAAAs4AuCAIEMAAAAAIDggOUEAKgLwgCCUIEZBACoC3IAgkpOUkyFIQQAgSLxBgICA/AdxBH0gSAVDAAAAAAs4AuyAIEEAKgLggCAgOkEAKgLsgCCUkiA7QQAqAvyAIpSTIUlB+IAgQQAoApiAIEH/P3FBAnRqIEk4AgBBACoCoIAgIDQgQJRDAACAP5KUIUpD6KIBPyBKlCFLIEtDAACAv5IhTCBMqCEOQQAgDkgEfyAOBUEACyEPQYknIA9IBH9BiScFIA8LIRAgTI4hTSBNQwAAAEAgS5OSIU4gS0MAAIC/IE2TkiFPIA5BAWohEUEAIBFIBH8gEQVBAAshEkGJJyASSAR/QYknBSASCyETQfiAIEEAKAKYgCAgEGtB/z9xQQJ0aioCACBOlCBPQfiAIEEAKAKYgCAgE2tB/z9xQQJ0aioCAJSSIVBBACBQvEGAgID8B3EEfSBQBUMAAAAACzgC+IAiIDsgSZQhUSBRvEGAgID8B3EEfSBRBUMAAAAACyFSIFJBACoC/IAikiA7QQAqAoSBJJSTIVNBgIEiQQAoApiAIEH/P3FBAnRqIFM4AgBDN8dNPyBKlCFUIFRDAACAv5IhVSBVqCEUIFWOIVYgFEEBaiEVQQAgFEgEfyAUBUEACyEWQQAgFUgEfyAVBUEACyEXQYCBIkEAKAKYgCBBiScgFkgEf0GJJwUgFgtrQf8/cUECdGoqAgAgVkMAAABAIFSTkpQgVEMAAIC/IFaTkkGAgSJBACgCmIAgQYknIBdIBH9BiScFIBcLa0H/P3FBAnRqKgIAlJIhV0EAIFe8QYCAgPwHcQR9IFcFQwAAAAALOAKAgSQgOyBTlCFYIFi8QYCAgPwHcQR9IFgFQwAAAAALIVkgWUEAKgKEgSSSIDtBACoCjIEmlJMhWkGIgSRBACgCmIAgQf8/cUECdGogWjgCACBKQwAAgL+SIVsgW6ghGCBbjiFcIBhBAWohGUEAIBhIBH8gGAVBAAshGkEAIBlIBH8gGQVBAAshG0GIgSRBACgCmIAgQYknIBpIBH9BiScFIBoLa0H/P3FBAnRqKgIAIFxDAAAAQCBKk5KUIEpDAACAvyBck5JBiIEkQQAoApiAIEGJJyAbSAR/QYknBSAbC2tB/z9xQQJ0aioCAJSSIV1BACBdvEGAgID8B3EEfSBdBUMAAAAACzgCiIEmIDsgWpQhXiBevEGAgID8B3EEfSBeBUMAAAAACyFfIF9BACoCjIEmkiFgQZCBJkEAKAKYgCBB/z9xQQJ0aiBgvEGAgID8B3EEfSBgBUMAAAAACzgCACAFIAhqKgIAIWFDm8m/PyBKlCFiIGKoIRwgYo4hYyAcQQFqIR1BACAcSAR/IBwFQQALIR5BACAdSAR/IB0FQQALIR8gYSAyQZCBJkEAKAKYgCBBiScgHkgEf0GJJwUgHgtBAWprQf8/cUECdGoqAgAgY0MAAIA/IGKTkpQgYiBjk0GQgSZBACgCmIAgQYknIB9IBH9BiScFIB8LQQFqa0H/P3FBAnRqKgIAlJKUkiFkQQAgZDgCkIEoQwAAAAAgMCAxQQAqApyBKJQgZEEAKgKUgSiSk5STIWVBACBlvEGAgID8B3EEfSBlBUMAAAAACzgCmIEoIDdBACoClIEolCAwIDFBACoCpIEolCAuIGSUk5STIWZBACBmvEGAgID8B3EEfSBmBUMAAAAACzgCoIEoQQAqApiBKCA2QQAqAqCBKJSSIWdBACBnOAKogSggLEEAKgKsgSiUIDggOUEAKgK0gSiUICogZ5STlJMhaEEAIGi8QYCAgPwHcQR9IGgFQwAAAAALOAKwgShDAAAAACA4IDlBACoCvIEolCBnQQAqAqyBKJKTlJMhaUEAIGm8QYCAgPwHcQR9IGkFQwAAAAALOAK4gShBACoCsIEoIDpBACoCuIEolJIgO0EAKgLEgSqUkyFqQcCBKEEAKAKYgCBB/z9xQQJ0aiBqOAIAIE5BwIEoQQAoApiAICAQa0H/P3FBAnRqKgIAlCBPQcCBKEEAKAKYgCAgE2tB/z9xQQJ0aioCAJSSIWtBACBrvEGAgID8B3EEfSBrBUMAAAAACzgCwIEqIDsgapQhbCBsvEGAgID8B3EEfSBsBUMAAAAACyFtIG1BACoCxIEqkiA7QQAqAsyBLJSTIW5ByIEqQQAoApiAIEH/P3FBAnRqIG44AgBDN8dNP0EAKgKggCAgNEPzBDU/IECUQ/MENT8gP5SSlEMAAIA/kpSUIW8gb0MAAIC/kiFwIHCoISAgcI4hcSAgQQFqISFBACAgSAR/ICAFQQALISJBACAhSAR/ICEFQQALISNByIEqQQAoApiAIEGJJyAiSAR/QYknBSAiC2tB/z9xQQJ0aioCACBxQwAAAEAgb5OSlCBvQwAAgL8gcZOSQciBKkEAKAKYgCBBiScgI0gEf0GJJwUgIwtrQf8/cUECdGoqAgCUkiFyQQAgcrxBgICA/AdxBH0gcgVDAAAAAAs4AsiBLCA7IG6UIXMgc7xBgICA/AdxBH0gcwVDAAAAAAshdCB0QQAqAsyBLJIgO0EAKgLUgS6UkyF1QdCBLEEAKAKYgCBB/z9xQQJ0aiB1OAIAQQAqAqCAICA0ID+UQwAAgD+SlCF2IHZDAACAv5IhdyB3qCEkIHeOIXggJEEBaiElQQAgJEgEfyAkBUEACyEmQQAgJUgEfyAlBUEACyEnQdCBLEEAKAKYgCBBiScgJkgEf0GJJwUgJgtrQf8/cUECdGoqAgAgeEMAAABAIHaTkpQgdkMAAIC/IHiTkkHQgSxBACgCmIAgQYknICdIBH9BiScFICcLa0H/P3FBAnRqKgIAlJIheUEAIHm8QYCAgPwHcQR9IHkFQwAAAAALOALQgS4gOyB1lCF6IHq8QYCAgPwHcQR9IHoFQwAAAAALIXsge0EAKgLUgS6SIXxB2IEuQQAoApiAIEH/P3FBAnRqIHy8QYCAgPwHcQR9IHwFQwAAAAALOAIAIAYgCGogPCAoQZCBJkEAKAKYgCBB/z9xQQJ0aioCACA8k5SSOAIAIAcgCGogYSAoQdiBLkEAKAKYgCBB/z9xQQJ0aioCACBhk5SSOAIAQQBBACgCmIAgQQFqNgKYgCBBAEEAKgKggCA4AqSAIEEAQQAqArSAIDgCuIAgQQBBACoCvIAgOALAgCBBAEEAKgLEgCA4AsiAIEEAQQAqAtCAIDgC1IAgQQBBACoC2IAgOALcgCBBAEEAKgLggCA4AuSAIEEAQQAqAuyAIDgC8IAgQQBBACoC+IAiOAL8gCJBAEEAKgKAgSQ4AoSBJEEAQQAqAoiBJjgCjIEmQQBBACoCkIEoOAKUgShBAEEAKgKYgSg4ApyBKEEAQQAqAqCBKDgCpIEoQQBBACoCqIEoOAKsgShBAEEAKgKwgSg4ArSBKEEAQQAqAriBKDgCvIEoQQBBACoCwIEqOALEgSpBAEEAKgLIgSw4AsyBLEEAQQAqAtCBLjgC1IEuIAhBBGohCCAIQQQgAWxIBEAMAgwBCwsLC4WAgIAAAEECDwuFgICAAABBAg8Li4CAgAAAIAAgAWoqAgAPC4qAgIAAAEEAKAKEgCAPC46AgIAAACAAIAEQBCAAIAEQDQuxi4CAAAEcf0EAIQFBACECQQAhA0EAIQRBACEFQQAhBkEAIQdBACEIQQAhCUEAIQpBACELQQAhDEEAIQ1BACEOQQAhD0EAIRBBACERQQAhEkEAIRNBACEUQQAhFUEAIRZBACEXQQAhGEEAIRlBACEaQQAhG0EAIRxBAEEANgKYgCBBACEBA0ACQEGggCAgAUECdGpDAAAAADgCACABQQFqIQEgAUECSARADAIMAQsLC0EAIQIDQAJAQbSAICACQQJ0akMAAAAAOAIAIAJBAWohAiACQQJIBEAMAgwBCwsLQQAhAwNAAkBBvIAgIANBAnRqQwAAAAA4AgAgA0EBaiEDIANBAkgEQAwCDAELCwtBACEEA0ACQEHEgCAgBEECdGpDAAAAADgCACAEQQFqIQQgBEECSARADAIMAQsLC0EAIQUDQAJAQdCAICAFQQJ0akMAAAAAOAIAIAVBAWohBSAFQQJIBEAMAgwBCwsLQQAhBgNAAkBB2IAgIAZBAnRqQwAAAAA4AgAgBkEBaiEGIAZBAkgEQAwCDAELCwtBACEHA0ACQEHggCAgB0ECdGpDAAAAADgCACAHQQFqIQcgB0ECSARADAIMAQsLC0EAIQgDQAJAQeyAICAIQQJ0akMAAAAAOAIAIAhBAWohCCAIQQJIBEAMAgwBCwsLQQAhCQNAAkBB+IAgIAlBAnRqQwAAAAA4AgAgCUEBaiEJIAlBgMAASARADAIMAQsLC0EAIQoDQAJAQfiAIiAKQQJ0akMAAAAAOAIAIApBAWohCiAKQQJIBEAMAgwBCwsLQQAhCwNAAkBBgIEiIAtBAnRqQwAAAAA4AgAgC0EBaiELIAtBgMAASARADAIMAQsLC0EAIQwDQAJAQYCBJCAMQQJ0akMAAAAAOAIAIAxBAWohDCAMQQJIBEAMAgwBCwsLQQAhDQNAAkBBiIEkIA1BAnRqQwAAAAA4AgAgDUEBaiENIA1BgMAASARADAIMAQsLC0EAIQ4DQAJAQYiBJiAOQQJ0akMAAAAAOAIAIA5BAWohDiAOQQJIBEAMAgwBCwsLQQAhDwNAAkBBkIEmIA9BAnRqQwAAAAA4AgAgD0EBaiEPIA9BgMAASARADAIMAQsLC0EAIRADQAJAQZCBKCAQQQJ0akMAAAAAOAIAIBBBAWohECAQQQJIBEAMAgwBCwsLQQAhEQNAAkBBmIEoIBFBAnRqQwAAAAA4AgAgEUEBaiERIBFBAkgEQAwCDAELCwtBACESA0ACQEGggSggEkECdGpDAAAAADgCACASQQFqIRIgEkECSARADAIMAQsLC0EAIRMDQAJAQaiBKCATQQJ0akMAAAAAOAIAIBNBAWohEyATQQJIBEAMAgwBCwsLQQAhFANAAkBBsIEoIBRBAnRqQwAAAAA4AgAgFEEBaiEUIBRBAkgEQAwCDAELCwtBACEVA0ACQEG4gSggFUECdGpDAAAAADgCACAVQQFqIRUgFUECSARADAIMAQsLC0EAIRYDQAJAQcCBKCAWQQJ0akMAAAAAOAIAIBZBAWohFiAWQYDAAEgEQAwCDAELCwtBACEXA0ACQEHAgSogF0ECdGpDAAAAADgCACAXQQFqIRcgF0ECSARADAIMAQsLC0EAIRgDQAJAQciBKiAYQQJ0akMAAAAAOAIAIBhBAWohGCAYQYDAAEgEQAwCDAELCwtBACEZA0ACQEHIgSwgGUECdGpDAAAAADgCACAZQQFqIRkgGUECSARADAIMAQsLC0EAIRoDQAJAQdCBLCAaQQJ0akMAAAAAOAIAIBpBAWohGiAaQYDAAEgEQAwCDAELCwtBACEbA0ACQEHQgS4gG0ECdGpDAAAAADgCACAbQQFqIRsgG0ECSARADAIMAQsLC0EAIRwDQAJAQdiBLiAcQQJ0akMAAAAAOAIAIBxBAWohHCAcQYDAAEgEQAwCDAELCwsL14CAgAABAX1DAIA7SEMAAIA/QQAoAoSAILKXliECQQAgATYChIAgQwCAO0hDAACAP0EAKAKEgCCyl5YhAkEAQ9sPSUAgApU4AoiAIEEAQwAAgD8gApU4AqyAIAuQgICAAAAgACABEAwgABAOIAAQCwv6gICAAABBAEMAAMhCOAKAgCBBAEMAAMhCOAKMgCBBAEMAAHpFOAKQgCBBAEMAAHBCOAKUgCBBAEMAAHBCOAKcgCBBAEOamZk+OAKogCBBAEMzMzM/OAKwgCBBAEMAAAAAOALMgCBBAEMAAAAAOALogCBBAEMAAIRCOAL0gCALkICAgAAAIAAgAUgEfyABBSAACw8LkICAgAAAIAAgAUgEfyAABSABCw8LjICAgAAAIAAgAWogAjgCAAsL6LSAgAABAEEAC+E0eyJuYW1lIjogImZpZzh2ZXJiIiwiZmlsZW5hbWUiOiAiZmlnOHZlcmIuZHNwIiwidmVyc2lvbiI6ICIyLjQwLjEyIiwiY29tcGlsZV9vcHRpb25zIjogIi1sYW5nIHdhc20taWIgLWNuIGZpZzh2ZXJiIC1lcyAxIC1tY2QgMTYgLXNpbmdsZSAtZnR6IDIiLCJpbmNsdWRlX3BhdGhuYW1lcyI6IFsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0IiwiLiIsIi90bXAvc2Vzc2lvbnMvOTgxRUNDN0M2ODg2Q0E3NDUyNDYxNEE2QjQ0NTRGM0UwQUMxNEQ5Ri93ZWIvd2FwIl0sInNpemUiOiA3ODY2ODAsImlucHV0cyI6IDIsIm91dHB1dHMiOiAyLCJtZXRhIjogWyB7ICJhbmFseXplcnNfbGliX25hbWUiOiAiRmF1c3QgQW5hbHl6ZXIgTGlicmFyeSIgfSx7ICJhbmFseXplcnNfbGliX3ZlcnNpb24iOiAiMC4yIiB9LHsgImF1dGhvciI6ICJNYXJlayBXaWV3aW9yc2tpIiB9LHsgImJhc2ljc19saWJfbmFtZSI6ICJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkiIH0seyAiYmFzaWNzX2xpYl92ZXJzaW9uIjogIjAuOCIgfSx7ICJjb21waWxlX29wdGlvbnMiOiAiLXNpbmdsZSAtc2NhbCAtSSBsaWJyYXJpZXMvIC1JIHByb2plY3QvIC1sYW5nIHdhc20iIH0seyAiZGVsYXlzX2xpYl9uYW1lIjogIkZhdXN0IERlbGF5IExpYnJhcnkiIH0seyAiZGVsYXlzX2xpYl92ZXJzaW9uIjogIjAuMSIgfSx7ICJmaWxlbmFtZSI6ICJmaWc4dmVyYi5kc3AiIH0seyAiZmlsdGVyc19saWJfYWxscGFzc19mY29tYl9hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl9hbGxwYXNzX2Zjb21iX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9hbGxwYXNzX2Zjb21iX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl9maWx0ZXJiYW5rX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX2ZpbHRlcmJhbmtfY29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX2ZpbHRlcmJhbmtfbGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnNfbGliX2hpZ2hwYXNzX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX2hpZ2hwYXNzX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9oaWdoc2hlbGZfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVyc19saWJfaGlnaHNoZWxmX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9oaWdoc2hlbGZfbGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnNfbGliX2xvd3Bhc3MwX2hpZ2hwYXNzMSI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9sb3dwYXNzMF9oaWdocGFzczFfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVyc19saWJfbG93cGFzc19hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl9sb3dwYXNzX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9sb3dwYXNzX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl9sb3dzaGVsZl9hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl9sb3dzaGVsZl9jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfbG93c2hlbGZfbGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnNfbGliX25hbWUiOiAiRmF1c3QgRmlsdGVycyBMaWJyYXJ5IiB9LHsgImZpbHRlcnNfbGliX3RmMV9hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl90ZjFfY29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX3RmMV9saWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVyc19saWJfdGYxc19hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl90ZjFzX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl90ZjFzX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl92ZXJzaW9uIjogIjAuMyIgfSx7ICJsaWJyYXJ5X3BhdGgwIjogIi9saWJyYXJpZXMvc3RkZmF1c3QubGliIiB9LHsgImxpYnJhcnlfcGF0aDEiOiAiL2xpYnJhcmllcy9zaWduYWxzLmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGgyIjogIi9saWJyYXJpZXMvZmlsdGVycy5saWIiIH0seyAibGlicmFyeV9wYXRoMyI6ICIvbGlicmFyaWVzL2FuYWx5emVycy5saWIiIH0seyAibGlicmFyeV9wYXRoNCI6ICIvbGlicmFyaWVzL2Jhc2ljcy5saWIiIH0seyAibGlicmFyeV9wYXRoNSI6ICIvbGlicmFyaWVzL21hdGhzLmxpYiIgfSx7ICJsaWJyYXJ5X3BhdGg2IjogIi9saWJyYXJpZXMvcGxhdGZvcm0ubGliIiB9LHsgImxpYnJhcnlfcGF0aDciOiAiL2xpYnJhcmllcy9vc2NpbGxhdG9ycy5saWIiIH0seyAibGlicmFyeV9wYXRoOCI6ICIvbGlicmFyaWVzL2RlbGF5cy5saWIiIH0seyAibGljZW5zZSI6ICJNSVQiIH0seyAibWF0aHNfbGliX2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXRoc19saWJfY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm1hdGhzX2xpYl9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibWF0aHNfbGliX25hbWUiOiAiRmF1c3QgTWF0aCBMaWJyYXJ5IiB9LHsgIm1hdGhzX2xpYl92ZXJzaW9uIjogIjIuNSIgfSx7ICJuYW1lIjogImZpZzh2ZXJiIiB9LHsgIm9zY2lsbGF0b3JzX2xpYl9uYW1lIjogIkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSIgfSx7ICJvc2NpbGxhdG9yc19saWJfdmVyc2lvbiI6ICIwLjMiIH0seyAicGxhdGZvcm1fbGliX25hbWUiOiAiR2VuZXJpYyBQbGF0Zm9ybSBMaWJyYXJ5IiB9LHsgInBsYXRmb3JtX2xpYl92ZXJzaW9uIjogIjAuMiIgfSx7ICJzaWduYWxzX2xpYl9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiIH0seyAic2lnbmFsc19saWJfdmVyc2lvbiI6ICIwLjMiIH0seyAidmVyc2lvbiI6ICIyLjQ0LjUiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogImZpZzh2ZXJiIiwiaXRlbXMiOiBbIHsidHlwZSI6ICJoZ3JvdXAiLCJsYWJlbCI6ICJHZW5lcmFsIiwibWV0YSI6IFt7ICIwIjogIiIgfSx7ICJ0b29sdGlwIjogIkdlbmVyYWwgY29udHJvbHMiIH1dLCJpdGVtcyI6IFsgeyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJNaXgiLCJzaG9ydG5hbWUiOiAiTWl4IiwiYWRkcmVzcyI6ICIvZmlnOHZlcmIvR2VuZXJhbC9NaXgiLCJpbmRleCI6IDUyNDI4OCwibWV0YSI6IFt7ICIwIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiTWl4IiB9LHsgInVuaXQiOiAiJSIgfV0sImluaXQiOiAxMDAsIm1pbiI6IDAsIm1heCI6IDEwMCwic3RlcCI6IDAuMX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJTaXplIiwic2hvcnRuYW1lIjogIlNpemUiLCJhZGRyZXNzIjogIi9maWc4dmVyYi9HZW5lcmFsL1NpemUiLCJpbmRleCI6IDUyNDMxNiwibWV0YSI6IFt7ICIxIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiU2NhbGUgc2l6ZSBpbiBwZXJjZW50cyIgfSx7ICJ1bml0IjogIiUiIH1dLCJpbml0IjogNjAsIm1pbiI6IDAsIm1heCI6IDEwMCwic3RlcCI6IDAuMX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJGZWVkYmFjayIsInNob3J0bmFtZSI6ICJGZWVkYmFjayIsImFkZHJlc3MiOiAiL2ZpZzh2ZXJiL0dlbmVyYWwvRmVlZGJhY2siLCJpbmRleCI6IDUyNDMwOCwibWV0YSI6IFt7ICIyIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiRmVlZGJhY2sgYW1vdW50IiB9LHsgInVuaXQiOiAiJSIgfV0sImluaXQiOiA2MCwibWluIjogMCwibWF4IjogMTAwLCJzdGVwIjogMC4xfSx7InR5cGUiOiAidnNsaWRlciIsImxhYmVsIjogIkRpZmZ1c2lvbiIsInNob3J0bmFtZSI6ICJEaWZmdXNpb24iLCJhZGRyZXNzIjogIi9maWc4dmVyYi9HZW5lcmFsL0RpZmZ1c2lvbiIsImluZGV4IjogNTI0NDA0LCJtZXRhIjogW3sgIjMiOiAiIiB9LHsgInN0eWxlIjogImtub2IiIH0seyAidG9vbHRpcCI6ICJEaWZmdXNpb24gYW1vdW50IiB9LHsgInVuaXQiOiAiJSIgfV0sImluaXQiOiA2NiwibWluIjogMCwibWF4IjogMTAwLCJzdGVwIjogMC4xfV19LHsidHlwZSI6ICJoZ3JvdXAiLCJsYWJlbCI6ICJEYW1waW5nIiwibWV0YSI6IFt7ICIxIjogIiIgfSx7ICJ0b29sdGlwIjogIkRhbXBpbmcgZmlsdGVycyBpbiB0aGUgZmVlZGJhY2sgbG9vcCIgfV0sIml0ZW1zIjogWyB7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIkhpZ2hTaGVsZiIsInNob3J0bmFtZSI6ICJIaWdoU2hlbGYiLCJhZGRyZXNzIjogIi9maWc4dmVyYi9EYW1waW5nL0hpZ2hTaGVsZiIsImluZGV4IjogNTI0MzY0LCJtZXRhIjogW3sgIjAiOiAiIiB9LHsgInN0eWxlIjogImtub2IiIH0seyAidG9vbHRpcCI6ICJIaWdoIHNoZWxmIGdhaW4iIH0seyAidW5pdCI6ICJkQiIgfV0sImluaXQiOiAwLCJtaW4iOiAtMjQsIm1heCI6IDI0LCJzdGVwIjogMC4xfSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogIkhpZ2hGcmVxIiwic2hvcnRuYW1lIjogIkhpZ2hGcmVxIiwiYWRkcmVzcyI6ICIvZmlnOHZlcmIvRGFtcGluZy9IaWdoRnJlcSIsImluZGV4IjogNTI0MzA0LCJtZXRhIjogW3sgIjEiOiAiIiB9LHsgInNjYWxlIjogImxvZyIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiSGlnaCBzaGVsZiBmcmVxdWVuY3kiIH0seyAidW5pdCI6ICJIeiIgfV0sImluaXQiOiA0MDAwLCJtaW4iOiA1MDAsIm1heCI6IDEwMDAwLCJzdGVwIjogMTB9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiTG93U2hlbGYiLCJzaG9ydG5hbWUiOiAiTG93U2hlbGYiLCJhZGRyZXNzIjogIi9maWc4dmVyYi9EYW1waW5nL0xvd1NoZWxmIiwiaW5kZXgiOiA1MjQzOTIsIm1ldGEiOiBbeyAiMiI6ICIiIH0seyAic3R5bGUiOiAia25vYiIgfSx7ICJ0b29sdGlwIjogIkxvdyBzaGVsZiBnYWluIiB9LHsgInVuaXQiOiAiZEIiIH1dLCJpbml0IjogMCwibWluIjogLTI0LCJtYXgiOiAyNCwic3RlcCI6IDAuMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJMb3dGcmVxIiwic2hvcnRuYW1lIjogIkxvd0ZyZXEiLCJhZGRyZXNzIjogIi9maWc4dmVyYi9EYW1waW5nL0xvd0ZyZXEiLCJpbmRleCI6IDUyNDMwMCwibWV0YSI6IFt7ICIzIjogIiIgfSx7ICJzY2FsZSI6ICJsb2ciIH0seyAic3R5bGUiOiAia25vYiIgfSx7ICJ0b29sdGlwIjogIkxvdyBTaGVsZiBGcmVxdWVuY3kiIH0seyAidW5pdCI6ICJIeiIgfV0sImluaXQiOiAxMDAsIm1pbiI6IDEwMCwibWF4IjogNDAwMCwic3RlcCI6IDEwfV19LHsidHlwZSI6ICJoZ3JvdXAiLCJsYWJlbCI6ICJNb2R1bGF0aW9uIiwibWV0YSI6IFt7ICIyIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiQ29udHJvbCBvdmVyIG1vZHVsYXRpb24gb2YgZGVsYXkgdGltZXMiIH1dLCJpdGVtcyI6IFsgeyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJSYXRlIiwic2hvcnRuYW1lIjogIlJhdGUiLCJhZGRyZXNzIjogIi9maWc4dmVyYi9Nb2R1bGF0aW9uL1JhdGUiLCJpbmRleCI6IDUyNDMzNiwibWV0YSI6IFt7ICIwIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiTW9kdWxhdGlvbiBMRk8gZnJlcXVlbmN5IiB9LHsgInVuaXQiOiAiSHoiIH1dLCJpbml0IjogMC43LCJtaW4iOiAwLCJtYXgiOiAxMCwic3RlcCI6IDAuMX0seyJ0eXBlIjogInZzbGlkZXIiLCJsYWJlbCI6ICJEZXB0aCIsInNob3J0bmFtZSI6ICJEZXB0aCIsImFkZHJlc3MiOiAiL2ZpZzh2ZXJiL01vZHVsYXRpb24vRGVwdGgiLCJpbmRleCI6IDUyNDMyOCwibWV0YSI6IFt7ICIxIjogIiIgfSx7ICJzdHlsZSI6ICJrbm9iIiB9LHsgInRvb2x0aXAiOiAiTW9kdWxhdGlvbiBMRk8gYW1vdW50IiB9LHsgInVuaXQiOiAiJSIgfV0sImluaXQiOiAwLjMsIm1pbiI6IDAsIm1heCI6IDUsInN0ZXAiOiAwLjZ9XX1dfV19"; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
    alert("AudioWorklet is not supported in this browser !")
}

class fig8verbNode extends AudioWorkletNode {

    constructor(context, baseURL, options) {
        super(context, 'fig8verb', options);

        this.baseURL = baseURL;
        this.json = options.processorOptions.json;
        this.json_object = JSON.parse(this.json);

        // JSON parsing functions
        this.parse_ui = function (ui, obj) {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function (group, obj) {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function (items, obj) {
            for (var i = 0; i < items.length; i++) {
                this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function (item, obj) {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                || item.type === "hslider"
                || item.type === "button"
                || item.type === "checkbox"
                || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.descriptor.push(item);
                // Decode MIDI
                if (item.meta !== undefined) {
                    for (var i = 0; i < item.meta.length; i++) {
                        if (item.meta[i].midi !== undefined) {
                            if (item.meta[i].midi.trim() === "pitchwheel") {
                                obj.fPitchwheelLabel.push({
                                    path: item.address,
                                    min: parseFloat(item.min),
                                    max: parseFloat(item.max)
                                });
                            } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                                obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                    .push({
                                        path: item.address,
                                        min: parseFloat(item.min),
                                        max: parseFloat(item.max)
                                    });
                            }
                        }
                    }
                }
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1, 1).toUpperCase(); });
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1, 1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.output_handler = null;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        this.descriptor = [];

        // MIDI
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
        try {
            if (this.parameters) this.parameters.forEach(p => p.automationRate = "k-rate");
        } catch (e) { }
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event) {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API

    /**
     * Destroy the node, deallocate resources.
     */
    destroy() {
        this.port.postMessage({ type: "destroy" });
        this.port.close();
    }

    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON() {
        return this.json;
    }

    // For WAP
    async getMetadata() {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
                return responseJSON.json();
            }).then(json => {
                resolve(json);
            })
        });
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    // For WAP
    setParam(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path) {
        return this.parameters.get(path).value;
    }

    // For WAP
    getParam(path) {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler) {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler() {
        return this.output_handler;
    }

    getNumInputs() {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs() {
        return parseInt(this.json_object.outputs);
    }

    // For WAP
    inputChannelCount() {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams() {
        return this.inputs_items;
    }

    // For WAP
    getDescriptor() {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value) {
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, fig8verbNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                if (this.output_handler) {
                    this.output_handler(path, this.getParamValue(path));
                }
            }
        }
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (0..16383)
     */
    pitchWheel(channel, wheel) {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var pw = this.fPitchwheelLabel[i];
            this.setParamValue(pw.path, fig8verbNode.remap(wheel, 0, 16383, pw.min, pw.max));
            if (this.output_handler) {
                this.output_handler(pw.path, this.getParamValue(pw.path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data) {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];

        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, (data2 * 128.0 + data1));
        }
    }

    // For WAP
    onMidi(data) {
        midiMessage(data);
    }

    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }

    /**
     * A different call closer to the preset management
     * @param {Object} patch to assign as a preset to the node
     */
    setPatch(patch) {
        this.setState(this.presets[patch])
    }

    static remap(v, mn0, mx0, mn1, mx1) {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }

}

// Factory class
class fig8verb {

    static fWorkletProcessors;

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "") {
        console.log("baseLatency " + context.baseLatency);
        console.log("outputLatency " + context.outputLatency);
        console.log("sampleRate " + context.sampleRate);

        this.context = context;
        this.baseURL = baseURL;
        this.pathTable = [];

        this.fWorkletProcessors = this.fWorkletProcessors || [];
    }

    heap2Str(buf) {
        let str = "";
        let i = 0;
        while (buf[i] !== 0) {
            str += String.fromCharCode(buf[i++]);
        }
        return str;
    }

    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load() {
        try {
            const importObject = {
                env: {
                    memoryBase: 0,
                    tableBase: 0,
                    _abs: Math.abs,

                    // Float version
                    _acosf: Math.acos,
                    _asinf: Math.asin,
                    _atanf: Math.atan,
                    _atan2f: Math.atan2,
                    _ceilf: Math.ceil,
                    _cosf: Math.cos,
                    _expf: Math.exp,
                    _floorf: Math.floor,
                    _fmodf: (x, y) => x % y,
                    _logf: Math.log,
                    _log10f: Math.log10,
                    _max_f: Math.max,
                    _min_f: Math.min,
                    _remainderf: (x, y) => x - Math.round(x / y) * y,
                    _powf: Math.pow,
                    _roundf: Math.fround,
                    _sinf: Math.sin,
                    _sqrtf: Math.sqrt,
                    _tanf: Math.tan,
                    _acoshf: Math.acosh,
                    _asinhf: Math.asinh,
                    _atanhf: Math.atanh,
                    _coshf: Math.cosh,
                    _sinhf: Math.sinh,
                    _tanhf: Math.tanh,
                    _isnanf: Number.isNaN,
                    _isinff: function (x) { return !isFinite(x); },
                    _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                    // Double version
                    _acos: Math.acos,
                    _asin: Math.asin,
                    _atan: Math.atan,
                    _atan2: Math.atan2,
                    _ceil: Math.ceil,
                    _cos: Math.cos,
                    _exp: Math.exp,
                    _floor: Math.floor,
                    _fmod: (x, y) => x % y,
                    _log: Math.log,
                    _log10: Math.log10,
                    _max_: Math.max,
                    _min_: Math.min,
                    _remainder: (x, y) => x - Math.round(x / y) * y,
                    _pow: Math.pow,
                    _round: Math.fround,
                    _sin: Math.sin,
                    _sqrt: Math.sqrt,
                    _tan: Math.tan,
                    _acosh: Math.acosh,
                    _asinh: Math.asinh,
                    _atanh: Math.atanh,
                    _cosh: Math.cosh,
                    _sinh: Math.sinh,
                    _tanh: Math.tanh,
                    _isnan: Number.isNaN,
                    _isinf: function (x) { return !isFinite(x); },
                    _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
                }
            };

            let real_url = (this.baseURL === "") ? "fig8verb.wasm" : (this.baseURL + "/fig8verb.wasm");
            const dspFile = await fetch(real_url);
            const dspBuffer = await dspFile.arrayBuffer();
            const dspModule = await WebAssembly.compile(dspBuffer);
            const dspInstance = await WebAssembly.instantiate(dspModule, importObject);

            let HEAPU8 = new Uint8Array(dspInstance.exports.memory.buffer);
            let json = this.heap2Str(HEAPU8);
            let json_object = JSON.parse(json);
            let options = { wasm_module: dspModule, json: json };

            if (this.fWorkletProcessors.indexOf(name) === -1) {
                try {
                    let re = /JSON_STR/g;
                    let fig8verbProcessorString1 = fig8verbProcessorString.replace(re, json);
                    let real_url = window.URL.createObjectURL(new Blob([fig8verbProcessorString1], { type: 'text/javascript' }));
                    await this.context.audioWorklet.addModule(real_url);
                    // Keep the DSP name
                    console.log("Keep the DSP name");
                    this.fWorkletProcessors.push(name);
                } catch (e) {
                    console.error(e);
                    console.error("Faust " + this.name + " cannot be loaded or compiled");
                    return null;
                }
            }
            this.node = new fig8verbNode(this.context, this.baseURL,
                {
                    numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                    numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                    channelCount: Math.max(1, parseInt(json_object.inputs)),
                    outputChannelCount: [parseInt(json_object.outputs)],
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    processorOptions: options
                });
            this.node.onprocessorerror = () => { console.log('An error from fig8verb-processor was detected.'); }
            return (this.node);
        } catch (e) {
            console.error(e);
            console.error("Faust " + this.name + " cannot be loaded or compiled");
            return null;
        }
    }

    async loadGui() {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createfig8verbGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createfig8verbGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };

    linkExists(url) {
        return document.querySelectorAll(`link[href="${url}"]`).length > 0;
    }
}

// Template string for AudioWorkletProcessor

let fig8verbProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class fig8verbProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                fig8verbProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                fig8verbProcessor.parse_items(group.items, obj, callback);
            }
        }
        
        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }
        
        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                fig8verbProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }
        
        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                fig8verbProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }
     
        static get parameterDescriptors() 
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            fig8verbProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, fig8verbProcessor.parse_item1);
            return params;
        }
       
        constructor(options)
        {
            super(options);
            this.running = true;
            
            const importObject = {
                    env: {
                        memoryBase: 0,
                        tableBase: 0,

                        // Integer version
                        _abs: Math.abs,

                        // Float version
                        _acosf: Math.acos,
                        _asinf: Math.asin,
                        _atanf: Math.atan,
                        _atan2f: Math.atan2,
                        _ceilf: Math.ceil,
                        _cosf: Math.cos,
                        _expf: Math.exp,
                        _floorf: Math.floor,
                        _fmodf: function(x, y) { return x % y; },
                        _logf: Math.log,
                        _log10f: Math.log10,
                        _max_f: Math.max,
                        _min_f: Math.min,
                        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
                        _powf: Math.pow,
                        _roundf: Math.fround,
                        _sinf: Math.sin,
                        _sqrtf: Math.sqrt,
                        _tanf: Math.tan,
                        _acoshf: Math.acosh,
                        _asinhf: Math.asinh,
                        _atanhf: Math.atanh,
                        _coshf: Math.cosh,
                        _sinhf: Math.sinh,
                        _tanhf: Math.tanh,

                        // Double version
                        _acos: Math.acos,
                        _asin: Math.asin,
                        _atan: Math.atan,
                        _atan2: Math.atan2,
                        _ceil: Math.ceil,
                        _cos: Math.cos,
                        _exp: Math.exp,
                        _floor: Math.floor,
                        _fmod: function(x, y) { return x % y; },
                        _log: Math.log,
                        _log10: Math.log10,
                        _max_: Math.max,
                        _min_: Math.min,
                        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
                        _pow: Math.pow,
                        _round: Math.fround,
                        _sin: Math.sin,
                        _sqrt: Math.sqrt,
                        _tan: Math.tan,
                        _acosh: Math.acosh,
                        _asinh: Math.asinh,
                        _atanh: Math.atanh,
                        _cosh: Math.cosh,
                        _sinh: Math.sinh,
                        _tanh: Math.tanh,

                        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
                    }
            };
            
            this.fig8verb_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
            this.json_object = JSON.parse(options.processorOptions.json);
         
            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
            
            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;
            this.integer_size = 4;
            
            this.factory = this.fig8verb_instance.exports;
            this.HEAP = this.fig8verb_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            // Warning: keeps a ref on HEAP in Chrome and prevent proper GC
            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];
        
            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);
            
            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];
         
            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }
            
            this.initAux = function ()
            {
                var i;
                
                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                // Parse UI
                fig8verbProcessor.parse_ui(this.json_object.ui, this, fig8verbProcessor.parse_item2);
                
                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path] >> 2] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path] >> 2];
            }

            // Init resulting DSP
            this.initAux();
        }
        
        process(inputs, outputs, parameters) 
        {
            var input = inputs[0];
            var output = outputs[0];
            
            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                //console.log("Process output error");
                return true;
            }
            
            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length); ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */
            
            // Update controls
            for (const path in parameters) {
                const paramArray = parameters[path];
                this.setParamValue(path, paramArray[0]);
            }
        
          	// Compute
            try {
                this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();
            
            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }
            
            return this.running;
    	}
        
        handleMessage(event)
        {
            var msg = event.data;
            switch (msg.type) {
                case "destroy": this.running = false; break;
            }
        }
    }

    // Globals
    const NUM_FRAMES = 128;
    try {
        registerProcessor('fig8verb', fig8verbProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

const dspName = "fig8verb";

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.fig8verb = fig8verb;
    window.Faustfig8verb = fig8verb;
    window[dspName] = fig8verb;
} else {
    module.exports = { fig8verb };
}
