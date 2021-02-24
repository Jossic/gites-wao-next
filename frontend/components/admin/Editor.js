import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';

const Editor = (props) => {
	ClassicEditor.builtinPlugins.map((plugin) => console.log(plugin)),
	const CKConfig = {
		toolbar: [
			
		],
		shouldNotGroupWhenFull: true,

		heading: {
			options: [
				{
					model: 'paragraph',
					title: 'Paragraph',
					class: 'ck-heading_paragraph',
				},
				{
					model: 'heading1',
					view: 'h1',
					title: 'Heading 1',
					class: 'ck-heading_heading1',
				},
				{
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					class: 'ck-heading_heading2',
				},
			],
		},
	};

	return (
		<CKEditor
			editor={ClassicEditor}
			data={props.value}
			config={CKConfig}
			onChange={(event, editor) => {
				const data = editor.getData();
				props.onChange(data);
			}}
		/>
	);
};

export default Editor;
