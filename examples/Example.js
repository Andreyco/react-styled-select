import React, { PropTypes } from 'react';
import StyledSelect from '../src/select';
import { countries } from './data';
import '../src/css/react-styled-select.css';

/**
 * Generate option sets
 */
const optionsCountries = countries.map((name) => <option key={name} value={name}>{name}</option>);

const year = (new Date).getFullYear();
const optionsYears = [];
for (let i = year; i > year - 10; i--) {
	optionsYears.push(<option key={i} value={i}>{i}</option>);
};

const Example = (props) => (
	<div>
		<header className="gradient">
			<h1>
				React Styled Select
			</h1>
			<p>
				Simple, native to browser, select component with style easy to override. Lightweight, drop-in&nbsp;solution.
			</p>
		</header>
		<div className="gh-reference">
			<a href="https://github.com/Andreyco/react-styled-select">API & Docs</a>
			<a className="github-button" href="https://github.com/Andreyco/react-styled-select" data-icon="octicon-star" data-style="mega" aria-label="Star Andreyco/react-styled-select on GitHub">Star</a>
		</div>

		<div style={{maxWidth: 400, margin: '0 auto', padding: '0 25px'}}>
			<p>
				React Styled Select makes styling <i>&lt;select&gt;</i> element&nbsp;easy.
			</p>
			<p style={{marginBottom: 50}}>
				It leaves rendering of &lt;option&gt; dropdown completely to browser, thus
				long dropdowns are problem-free and overflows are not hidden.
			</p>

			<section>
				<h2>Examples</h2>
				<div className="group">
					<b>Long dropdown</b>
					<small>
						What's your home country? Pick one from this very long dropdown.
					</small>
					<StyledSelect defaultValue="Slovakia">
						{ optionsCountries }
					</StyledSelect>
				</div>

				<div className="group">
					<b>Disabled</b>
					<StyledSelect defaultValue="Slovakia" disabled>
						{ optionsCountries }
					</StyledSelect>
				</div>

				<div className="group">
					<b>Overflows</b>
					<small>
						Overflowing content outside of these borders is cropped. Open it, dropdown is displayed properly.
						Other custom solutions makes displaying dropdown impossible without using "portals".
					</small>
					<div className="gradient overflow-wrapper">
						<StyledSelect>
							{ optionsYears }
						</StyledSelect>
					</div>
				</div>
			</section>

			<section>
				<h2>Features</h2>
				<div className="group">
					<b>Drop-in solution</b>
					<small>
						Replace <i>&lt;select&gt;</i> with <i>&lt;ReactStyledSelect&gt;</i> &mdash; it just works.
					</small>
				</div>

				<div className="group">
					<b>Focusable</b>
					<small>
						React Styled Select receives focus. Press `tab` or `shift + tab` button
						to navigate thru all React Styled Select elements on page.
					</small>
				</div>

				<div className="group">
					<b>Keyboard friendly</b>
					<small>
						Navigating and selecting value from dropdown can be done using keyboard only.
					</small>
				</div>
			</section>
		</div>

		<footer>
			<small>Copyright © <b>Andrej Badin</b> { (new Date()).getFullYear() }. MIT Licensed.</small>
		</footer>
	</div>
);

Example.propTypes = {
};

export default Example;
