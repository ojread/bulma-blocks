// Button block

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Fragment } = wp.element;
const {
	ColorIndicator,
	PanelBody,
	Dashicon,
	IconButton,
	SelectControl,
	TextControl,
} = wp.components;
const {
	InspectorControls,
	PlainText,
	RichText,
	URLInput,
} = wp.editor;

const attributes = {
	text: {
		type: 'string',
		source: 'text',
		selector: 'a',
	},
	url: {
		type: 'string',
		source: 'attribute',
		selector: 'a',
		attribute: 'href',
	},
	color: {
		type: 'string',
	},
};

registerBlockType( 'bulma-blocks/button', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Bulma button' ), // Block title.
	icon: 'button', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.

	attributes,

	// Editor interface
	edit( props ) {
		const {
			attributes,
			className,
			isSelected,
			setAttributes,
		} = props;

		const {
			text,
			url,
			color
		} = attributes;

		const buttonClass = 'button ' + color;

		return (
			<Fragment>
				<div className={ className }>
					<a className={ buttonClass } url={ url }>
						{ text }
					</a>
					<InspectorControls>
						<PanelBody
							title={ __('Colour Settings') }
						>
							<SelectControl
								label={ __( 'Select a colour:' ) }
								value={ color } // e.g: value = [ 'a', 'c' ]
								onChange={ ( color ) => { setAttributes( { color } ) } }
								options={ [
									{ value: '', label: 'Default' },
									{ value: 'is-primary', label: 'Primary' },
									{ value: 'is-link', label: 'Link' },
									{ value: 'is-info', label: 'Info' },
									{ value: 'is-success', label: 'Success' },
									{ value: 'is-warning', label: 'Warning' },
									{ value: 'is-danger', label: 'Danger' },
									{ value: 'is-light', label: 'Light' },
									{ value: 'is-dark', label: 'Dark' },
								] }
							/>
						</PanelBody>
					</InspectorControls>
				</div>
				{ isSelected && (
					<Fragment>
						<form
							onSubmit={ (event) => event.preventDefault() }
						>
							<div style={{ display: 'flex' }}>
								<Dashicon icon="edit" />
								<PlainText
									placeholder={ __('Add text…') }
									value={ text }
									onChange={ (value) => setAttributes( { text: value } ) }
									style={{ width: 'auto' }}
									keepPlaceholderOnFocus
								/>
							</div>
							<div style={{ display: 'flex' }}>							
								<Dashicon icon="admin-links" />
								<URLInput
									value={ url }
									onChange={ (value) => setAttributes( {url: value} ) }
									style={{ width: 'auto' }}
								/>
							</div>
						</form>
					</Fragment>
				) }
			</Fragment>
		);
	},

	// Save content
	save( props ) {
		const {
			attributes,
			className,
		} = props;

		const {
			text,
			url,
			color,
		} = attributes;

		const buttonClass = 'button ' + color;

		return (
			<div className={ className }>
				<a className={ buttonClass } href={ url }>
					{ text }
				</a>
			</div>
		);
	},
} );
