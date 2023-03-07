import "~/lib/sideEffect"

export default function Index() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
			<h1>Remix Side-effect Test</h1>
			<p>Side-effect message {globalThis.SIDE_EFFECT.message}</p>
		</div>
	)
}
