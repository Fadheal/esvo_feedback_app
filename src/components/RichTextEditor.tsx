import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './MenuBar'

interface RteProps {
    value: string;
    onChange: any;
    onBlur: any;
}

function RichTextEditor({ value, onChange, onBlur }: RteProps) {
    const editor = useEditor({
        extensions: [StarterKit],
        content: value,
        editorProps: {
            attributes: {
                class:'border rounded-md bg-background py-2 px-3 min-h-25'
            }
        },
        // eslint-disable-next-line no-shadow
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML().replace(/<\/?p>/g, ''))
        },
        onBlur: () => {
            onBlur();
        },
        immediatelyRender: false,
    })

    return (
        <>
            <EditorContent className="[&_.ProseMirror]:h-25 [&_.ProseMirror]:overflow-y-auto [&_.ProseMirror]:outline-none" editor={editor}/>
        </>
    )
}

export default RichTextEditor