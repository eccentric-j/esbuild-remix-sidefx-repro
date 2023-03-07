// This file will not be included in the bundle due to package.json
// "sideEffects": false setting.

// It's not unreasonable for it to be a default remix setting, but it would be
// helpful if esbuild could warn when omitting root project code due to
// `sideEffects` setting.

console.log("A very simple side-effect to log a message")

if (globalThis?.document) {
	console.log("A slightly more complex side-effect that runs only client-side")
}

globalThis.SIDE_EFFECT = {
	message: "A side-effect another langauge transpiler may generate",
}
