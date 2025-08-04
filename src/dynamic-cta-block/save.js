// save.js

import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title, description, buttonText, inputs } = attributes;

	return (
		<div {...useBlockProps.save()} className="cta-form-wrapper">
			{title && (
				<h2
					style={{
						fontSize: attributes.titleFontSize
							? `${attributes.titleFontSize}px`
							: undefined,
						fontWeight: attributes.titleFontWeight,
						fontFamily: attributes.titleFontFamily,
					}}
				>
					{title}
				</h2>
			)}
			{description && <p>{description}</p>}

			<form>
				{inputs?.map((input, index) => {
					switch (input.type) {
						case "select":
							return (
								<select key={index} name={input.name || `select-${index}`}>
									{input.options?.map((opt, i) => (
										<option key={i} value={opt}>
											{opt}
										</option>
									))}
								</select>
							);
						case "radio":
							return (
								<div key={index}>
									{input.options?.map((opt, i) => (
										<label key={i}>
											<input
												type="radio"
												name={input.name || `radio-${index}`}
												value={opt}
											/>
											{opt}
										</label>
									))}
								</div>
							);
						case "checkbox":
							return (
								<div key={index}>
									<label>
										<input
											type="checkbox"
											name={input.name || `checkbox-${index}`}
										/>
										{input.label || input.name}
									</label>
								</div>
							);
						default:
							return (
								<input
									key={index}
									type={input.type || "text"}
									placeholder={input.placeholder || input.name}
									name={input.name || `input-${index}`}
								/>
							);
					}
				})}

				{buttonText && <button type="submit">{buttonText}</button>}
			</form>
		</div>
	);
}
