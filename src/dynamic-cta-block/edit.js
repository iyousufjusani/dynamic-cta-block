// edit.js

import { useBlockProps, RichText } from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
	SelectControl,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		description,
		buttonText,
		titleFontSize = 32,
		titleFontWeight = "600",
		titleFontFamily = "inherit",
		inputs = [],
	} = attributes;
	const blockProps = useBlockProps();

	const [newInputName, setNewInputName] = useState("");
	const [newInputType, setNewInputType] = useState("text");

	const handleAddInput = () => {
		if (!newInputName) return;

		const newInput = {
			name: newInputName,
			type: newInputType,
			placeholder: newInputName,
			options:
				newInputType === "select" || newInputType === "radio"
					? ["Option 1"]
					: [],
		};

		setAttributes({ inputs: [...inputs, newInput] });
		setNewInputName("");
		setNewInputType("text");
	};

	const removeInput = (index) => {
		const updatedInputs = [...inputs];
		updatedInputs.splice(index, 1);
		setAttributes({ inputs: updatedInputs });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="CTA Settings">
					<TextControl
						label="Title"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
					/>
					<NumberControl
						label="Title Font Size (px)"
						value={titleFontSize}
						onChange={(value) =>
							setAttributes({ titleFontSize: parseInt(value || 32) })
						}
						min={12}
						max={100}
					/>
					<SelectControl
						label="Title Font Weight"
						value={titleFontWeight}
						onChange={(value) => setAttributes({ titleFontWeight: value })}
						options={[
							{ label: "Normal (400)", value: "400" },
							{ label: "Semi Bold (600)", value: "600" },
							{ label: "Bold (700)", value: "700" },
							{ label: "Extra Bold (800)", value: "800" },
							{ label: "Black (900)", value: "900" },
						]}
					/>
					<SelectControl
						label="Title Font Family"
						value={titleFontFamily}
						onChange={(value) => setAttributes({ titleFontFamily: value })}
						options={[
							{ label: "Default (Inherit)", value: "inherit" },
							{ label: "Sans-serif", value: "sans-serif" },
							{ label: "Serif", value: "serif" },
							{ label: "Monospace", value: "monospace" },
							{ label: "Inter", value: "Inter, sans-serif" },
							{ label: "Roboto", value: "Roboto, sans-serif" },
						]}
					/>

					<TextareaControl
						label="Description"
						value={description}
						onChange={(value) => setAttributes({ description: value })}
					/>
					<TextControl
						label="Button Text"
						value={buttonText}
						onChange={(value) => setAttributes({ buttonText: value })}
					/>
				</PanelBody>

				<PanelBody title="Form Inputs" initialOpen={false}>
					<TextControl
						label="Input Name"
						value={newInputName}
						onChange={setNewInputName}
					/>
					<SelectControl
						label="Input Type"
						value={newInputType}
						onChange={setNewInputType}
						options={[
							{ label: "Text", value: "text" },
							{ label: "Email", value: "email" },
							{ label: "Textarea", value: "textarea" },
							{ label: "Select", value: "select" },
							{ label: "Radio", value: "radio" },
							{ label: "Checkbox", value: "checkbox" },
						]}
					/>
					<Button
						variant="primary"
						onClick={handleAddInput}
						style={{ marginTop: "10px" }}
					>
						Add Input
					</Button>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps} className="cta-form-wrapper">
				{title && (
					<RichText
						tagName="h2"
						value={title}
						onChange={(value) => setAttributes({ title: value })}
						style={{
							fontSize: `${titleFontSize}px`,
							fontWeight: titleFontWeight,
							fontFamily: titleFontFamily,
						}}
					/>
				)}
				{description && (
					<RichText
						tagName="p"
						value={description}
						onChange={(value) => setAttributes({ description: value })}
					/>
				)}

				<form>
					{inputs.map((input, index) => (
						<div key={index} className="input-preview">
							{input.type === "select" ? (
								<select disabled>
									{input.options.map((opt, i) => (
										<option key={i}>{opt}</option>
									))}
								</select>
							) : input.type === "radio" ? (
								<div>
									{input.options.map((opt, i) => (
										<label key={i}>
											<input type="radio" disabled /> {opt}
										</label>
									))}
								</div>
							) : input.type === "checkbox" ? (
								<label>
									<input type="checkbox" disabled /> {input.name}
								</label>
							) : input.type === "textarea" ? (
								<textarea placeholder={input.placeholder} disabled></textarea>
							) : (
								<input
									type={input.type}
									placeholder={input.placeholder}
									disabled
								/>
							)}
							<Button
								isDestructive
								onClick={() => removeInput(index)}
								style={{ marginTop: "1rem", marginBottom: "1rem" }}
								size="small"
							>
								Remove
							</Button>
						</div>
					))}

					{buttonText && (
						<button type="submit" disabled>
							{buttonText}
						</button>
					)}
				</form>
			</div>
		</>
	);
}
