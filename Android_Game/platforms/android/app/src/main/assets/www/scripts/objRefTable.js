const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Touch,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite,
		C3.Behaviors.bound,
		C3.Behaviors.EightDir,
		C3.Plugins.Text,
		C3.Plugins.Browser,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.ScriptsInEvents.Main_es_Event5_Act1
	];
};
self.C3_JsPropNameTable = [
	{Touch: 0},
	{Keyboard: 0},
	{BoundToLayout: 0},
	{"8Direction": 0},
	{Player: 0},
	{QR: 0},
	{Browser: 0}
];

self.InstanceType = {
	Touch: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	Player: class extends self.ISpriteInstance {},
	QR: class extends self.ITextInstance {},
	Browser: class extends self.IInstance {}
}