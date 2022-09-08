import '../utils/webaudio-controls.js'

      const getBaseURL = () => {
        const base = new URL('.', import.meta.url);
        return `${base}`;
      };
      export default class fig8verbGui extends HTMLElement {
              constructor(plug) {
                 
        super();
            this._plug = plug;
            this._plug.gui = this;
        console.log(this._plug);
          
        this._root = this.attachShadow({ mode: 'open' });
        this._root.innerHTML = `<style>.my-pedal {animation:none 0s ease 0s 1 normal none running;appearance:none;background:rgb(128, 128, 128) none repeat scroll 0% 0% / contain padding-box border-box;border:1px solid rgb(73, 73, 73);bottom:-180.922px;clear:none;clip:auto;color:rgb(33, 37, 41);columns:auto auto;contain:none;content:normal;cursor:auto;cx:0px;cy:0px;d:none;direction:ltr;display:block;fill:rgb(0, 0, 0);filter:none;flex:0 1 auto;float:none;font:16px / 24px -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";gap:normal;grid:none / none / none / row / auto / auto;height:482px;hyphens:manual;inset:57.9219px 971px -180.922px 212px;isolation:auto;left:212px;margin:2px;marker:none;mask:none;offset:none 0px auto 0deg;opacity:1;order:0;orphans:2;outline:rgb(33, 37, 41) none 0px;overflow:visible;padding:1px;page:auto;perspective:none;position:unset;quotes:auto;r:0px;resize:none;right:971px;rotate:none;rx:auto;ry:auto;scale:none;speak:normal;stroke:none;top:57.9219px;transform:none;transition:all 0s ease 0s;translate:none;visibility:visible;widows:2;width:286px;x:0px;y:0px;zoom:1;};</style>
<div id="fig8verb" class="resize-drag my-pedal" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; box-shadow: rgba(0, 0, 0, 0.7) 4px 5px 6px, rgba(0, 0, 0, 0.2) -2px -2px 5px 0px inset, rgba(255, 255, 255, 0.2) 3px 1px 1px 4px inset, rgba(0, 0, 0, 0.9) 1px 0px 1px 0px, rgba(0, 0, 0, 0.9) 0px 2px 1px 0px, rgba(0, 0, 0, 0.9) 1px 1px 1px 0px; border-radius: 15px; background-color: grey; touch-action: none; width: 286px; position: relative; top: 0px; left: 0px; height: 482px;"><div id="fig8verb" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 33px; left: 22.0781px; width: 235.844px; height: 117.5px;"></div><div id="fig8verb" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 154.5px; left: 1px; width: 278px; height: 199px;"></div><div id="fig8verb" class="resize-drag" style="border: 1px solid rgb(73, 73, 73); text-align: center; display: inline-block; vertical-align: baseline; padding: 1px; margin: 2px; box-sizing: border-box; background-size: contain; border-radius: 15px; background-color: transparent; touch-action: none; position: absolute; top: 357.5px; left: 91.8594px; width: 96.2656px; height: 117.5px;"></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 26.0781px; width: 42px; height: 79.5px;"><webaudio-knob id="/fig8verb/General/Mix" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="100" step="0.1" width="40" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: none; width: 40px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 70.0781px; width: 42px; height: 79.5px;"><webaudio-knob id="/fig8verb/General/Size" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="100" step="0.1" width="40" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: none; width: 40px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 114.078px; width: 73.0625px; height: 79.5px;"><webaudio-knob id="/fig8verb/General/Feedback" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="100" step="0.1" width="40" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: none; width: 40px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1016.88px; top: -36.5px;">0.0</div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 69px; left: 189.141px; width: 66.7812px; height: 79.5px;"><webaudio-knob id="/fig8verb/General/Diffusion" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="100" step="0.1" width="40" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: none; width: 40px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip" style="display: inline-block; width: auto; height: auto; transition: opacity 0.1s ease 0s, visibility 0.1s ease 0s; opacity: 0; visibility: hidden; left: 1013.74px; top: -36.5px;">0.0</div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 190.5px; left: 34.1094px; width: 72.9062px; height: 79.5px;"><webaudio-knob id="/fig8verb/Damping/HighShelf" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="-24" max="24" step="0.1" width="40" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: none; width: 40px; height: 40px; background-position: 0px -2000px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 190.5px; left: 109.016px; width: 68.4688px; height: 79.5px;"><webaudio-knob id="/fig8verb/Damping/HighFreq" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="500" max="10000" step="10" width="40" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: none; width: 40px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 190.5px; left: 179.484px; width: 68.3906px; height: 79.5px;"><webaudio-knob id="/fig8verb/Damping/LowShelf" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="-24" max="24" step="0.1" width="40" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: none; width: 40px; height: 40px; background-position: 0px -2000px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 272px; left: 109.016px; width: 63.9531px; height: 79.5px;"><webaudio-knob id="/fig8verb/Damping/LowFreq" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="100" max="4000" step="10" width="40" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: none; width: 40px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 393.5px; left: 95.8594px; width: 42px; height: 79.5px;"><webaudio-knob id="/fig8verb/Modulation/Rate" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="10" step="0.1" width="40" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: none; width: 40px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><div class="drag" style="padding: 1px; margin: 1px; text-align: center; display: inline-block; box-sizing: border-box; touch-action: none; position: absolute; top: 393.5px; left: 139.859px; width: 46.2656px; height: 79.5px;"><webaudio-knob id="/fig8verb/Modulation/Depth" src="./img/knobs/MiniMoog_Main.png" sprites="100" min="0" max="5" step="0.6" width="40" height="40" style="touch-action: none; display: block;"><style>

.webaudioctrl-tooltip{
  display:inline-block;
  position:absolute;
  margin:0 -1000px;
  z-index: 999;
  background:#eee;
  color:#000;
  border:1px solid #666;
  border-radius:4px;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  visibility:hidden;
}
.webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
.webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}

webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  cursor:pointer;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  position:relative;
  z-index:1;
  margin:0;
  padding:0;
}
</style>
<div class="webaudio-knob-body" tabindex="1" touch-action="none" style="background-image: url(&quot;./img/knobs/MiniMoog_Main.png&quot;); background-size: 40px 4040px; outline: none; width: 40px; height: 40px; background-position: 0px 0px; transform: rotate(0deg);"></div><div class="webaudioctrl-tooltip"></div>
</webaudio-knob></div><label for="fig8verb" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 282px; left: 2px; top: 3.92188px;" class="drag" contenteditable="false">fig8verb</label><label for="General" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 231.844px; left: 27.0781px; top: 39.9219px;" class="drag" contenteditable="false">General</label><label for="Damping" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 274px; left: 6px; top: 161.422px;" class="drag" contenteditable="false">Damping</label><label for="Modulation" style="display: block; touch-action: none; position: absolute; z-index: 1; width: 92.2656px; left: 96.8594px; top: 364.422px;" class="drag" contenteditable="false">Modulation</label><label for="Mix" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 40px; left: 29.0781px; top: 119.422px;" class="drag" contenteditable="false">Mix</label><label for="Size" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 40px; left: 73.0781px; top: 119.422px;" class="drag" contenteditable="false">Size</label><label for="Feedback" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 71.0625px; left: 117.078px; top: 119.422px;" class="drag" contenteditable="false">Feedback</label><label for="Diffusion" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 64.7812px; left: 192.141px; top: 119.422px;" class="drag" contenteditable="false">Diffusion</label><label for="HighShelf" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 70.9062px; left: 37.1094px; top: 240.922px;" class="drag" contenteditable="false">HighShelf</label><label for="HighFreq" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 66.4688px; left: 112.016px; top: 240.922px;" class="drag" contenteditable="false">HighFreq</label><label for="LowShelf" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 66.3906px; left: 182.484px; top: 240.922px;" class="drag" contenteditable="false">LowShelf</label><label for="LowFreq" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 61.9531px; left: 112.016px; top: 322.422px;" class="drag" contenteditable="false">LowFreq</label><label for="Rate" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 40px; left: 98.8594px; top: 443.922px;" class="drag" contenteditable="false">Rate</label><label for="Depth" style="text-align: center; display: block; touch-action: none; position: absolute; z-index: 1; width: 44.2656px; left: 142.859px; top: 443.922px;" class="drag" contenteditable="false">Depth</label></div>`;
  
        this.isOn;
            this.state = new Object();
            this.setKnobs();
            this.setSliders();
            this.setSwitches();
            //this.setSwitchListener();
            this.setInactive();
            // Change #pedal to .my-pedal for use the new builder
            this._root.querySelector('.my-pedal').style.transform = 'none';
            //this._root.querySelector("#test").style.fontFamily = window.getComputedStyle(this._root.querySelector("#test")).getPropertyValue('font-family');
  
            // Compute base URI of this main.html file. This is needed in order
            // to fix all relative paths in CSS, as they are relative to
            // the main document, not the plugin's main.html
            this.basePath = getBaseURL();
            console.log("basePath = " + this.basePath)
  
            // Fix relative path in WebAudio Controls elements
            this.fixRelativeImagePathsInCSS();
  
            // optionnal : set image background using a relative URI (relative
            // to this file)
        //this.setImageBackground("/img/BigMuffBackground.png");
          
        // Monitor param changes in order to update the gui
        window.requestAnimationFrame(this.handleAnimationFrame);
      
              }
          
              fixRelativeImagePathsInCSS() {
                 
      // change webaudiocontrols relative paths for spritesheets to absolute
          let webaudioControls = this._root.querySelectorAll(
              'webaudio-knob, webaudio-slider, webaudio-switch, img'
          );
          webaudioControls.forEach((e) => {
              let currentImagePath = e.getAttribute('src');
              if (currentImagePath !== undefined) {
                  //console.log("Got wc src as " + e.getAttribute("src"));
                  let imagePath = e.getAttribute('src');
                  e.setAttribute('src', this.basePath + '/' + imagePath);
                  //console.log("After fix : wc src as " + e.getAttribute("src"));
              }
          });
  
          let sliders = this._root.querySelectorAll('webaudio-slider');
          sliders.forEach((e) => {
              let currentImagePath = e.getAttribute('knobsrc');
              if (currentImagePath !== undefined) {
                  let imagePath = e.getAttribute('knobsrc');
                  e.setAttribute('knobsrc', this.basePath + '/' + imagePath);
              }
          });

          // BMT Get all fonts
          // Need to get the attr font
          let usedFonts = "";
          let fonts = this._root.querySelectorAll('label[font]');
          fonts.forEach((e) => {
              if(!usedFonts.includes(e.getAttribute("font"))) usedFonts += "family=" + e.getAttribute("font") + "&";
          });
          let link = document.createElement('link');
          link.rel = "stylesheet";
          if(usedFonts.slice(0, -1)) link.href = "https://fonts.googleapis.com/css2?"+usedFonts.slice(0, -1)+"&display=swap";
          document.querySelector('head').appendChild(link);
          
          // BMT Adapt for background-image
          let divs = this._root.querySelectorAll('div');
          divs.forEach((e) => {
              if('background-image' in e.style){
                let currentImagePath = e.style.backgroundImage.slice(4, -1);
                if (currentImagePath !== undefined) {
                    let imagePath = e.style.backgroundImage.slice(5, -2);
                    if(imagePath != "") e.style.backgroundImage = 'url(' + this.basePath + '/' + imagePath + ')';
                }
              }
          });
          
              }
          
              setImageBackground() {
                 
      // check if the shadowroot host has a background image
          let mainDiv = this._root.querySelector('#main');
          mainDiv.style.backgroundImage =
              'url(' + this.basePath + '/' + imageRelativeURI + ')';
  
          //console.log("background =" + mainDiv.style.backgroundImage);
          //this._root.style.backgroundImage = "toto.png";
      
              }
          
              attributeChangedCallback() {
                 
            console.log('Custom element attributes changed.');
            this.state = JSON.parse(this.getAttribute('state'));
        let tmp = '/PingPongDelayFaust/bypass';
        
        if (this.state[tmp] == 1) {
          this._root.querySelector('#switch1').value = 0;
          this.isOn = false;
        } else if (this.state[tmp] == 0) {
          this._root.querySelector('#switch1').value = 1;
          this.isOn = true;
        }
  
        this.knobs = this._root.querySelectorAll('.knob');
        console.log(this.state);
  
        for (var i = 0; i < this.knobs.length; i++) {
          this.knobs[i].setValue(this.state[this.knobs[i].id], false);
          console.log(this.knobs[i].value);
        }
      
              }
          handleAnimationFrame = () => {
        this._root.getElementById('/fig8verb/General/Mix').value = this._plug.audioNode.getParamValue('/fig8verb/General/Mix');
        

        this._root.getElementById('/fig8verb/General/Size').value = this._plug.audioNode.getParamValue('/fig8verb/General/Size');
        

        this._root.getElementById('/fig8verb/General/Feedback').value = this._plug.audioNode.getParamValue('/fig8verb/General/Feedback');
        

        this._root.getElementById('/fig8verb/General/Diffusion').value = this._plug.audioNode.getParamValue('/fig8verb/General/Diffusion');
        

        this._root.getElementById('/fig8verb/Damping/HighShelf').value = this._plug.audioNode.getParamValue('/fig8verb/Damping/HighShelf');
        

        this._root.getElementById('/fig8verb/Damping/HighFreq').value = this._plug.audioNode.getParamValue('/fig8verb/Damping/HighFreq');
        

        this._root.getElementById('/fig8verb/Damping/LowShelf').value = this._plug.audioNode.getParamValue('/fig8verb/Damping/LowShelf');
        

        this._root.getElementById('/fig8verb/Damping/LowFreq').value = this._plug.audioNode.getParamValue('/fig8verb/Damping/LowFreq');
        

        this._root.getElementById('/fig8verb/Modulation/Rate').value = this._plug.audioNode.getParamValue('/fig8verb/Modulation/Rate');
        

        this._root.getElementById('/fig8verb/Modulation/Depth').value = this._plug.audioNode.getParamValue('/fig8verb/Modulation/Depth');
        
window.requestAnimationFrame(this.handleAnimationFrame);
         }
      
              get properties() {
                 
        this.boundingRect = {
            dataWidth: {
              type: Number,
              value: null
            },
            dataHeight: {
              type: Number,
              value: null
            }
        };
        return this.boundingRect;
      
              }
          
              static get observedAttributes() {
                 
        return ['state'];
      
              }
          
              setKnobs() {
                 this._root.getElementById("/fig8verb/General/Mix").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/fig8verb/General/Mix", e.target.value));
this._root.getElementById("/fig8verb/General/Size").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/fig8verb/General/Size", e.target.value));
this._root.getElementById("/fig8verb/General/Feedback").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/fig8verb/General/Feedback", e.target.value));
this._root.getElementById("/fig8verb/General/Diffusion").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/fig8verb/General/Diffusion", e.target.value));
this._root.getElementById("/fig8verb/Damping/HighShelf").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/fig8verb/Damping/HighShelf", e.target.value));
this._root.getElementById("/fig8verb/Damping/HighFreq").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/fig8verb/Damping/HighFreq", e.target.value));
this._root.getElementById("/fig8verb/Damping/LowShelf").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/fig8verb/Damping/LowShelf", e.target.value));
this._root.getElementById("/fig8verb/Damping/LowFreq").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/fig8verb/Damping/LowFreq", e.target.value));
this._root.getElementById("/fig8verb/Modulation/Rate").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/fig8verb/Modulation/Rate", e.target.value));
this._root.getElementById("/fig8verb/Modulation/Depth").addEventListener("input", (e) =>this._plug.audioNode.setParamValue("/fig8verb/Modulation/Depth", e.target.value));

              }
          
              setSliders() {
                 
              }
          
              setSwitches() {
                 
              }
          
              setInactive() {
                 
        let switches = this._root.querySelectorAll(".switch webaudio-switch");
  
        switches.forEach(s => {
          console.log("### SWITCH ID = " + s.id);
          this._plug.audioNode.setParamValue(s.id, 0);
        });
      
              }
          }
      try {
          customElements.define('wap-fig8verb', 
                                fig8verbGui);
          console.log("Element defined");
      } catch(error){
          console.log(error);
          console.log("Element already defined");      
      }
      