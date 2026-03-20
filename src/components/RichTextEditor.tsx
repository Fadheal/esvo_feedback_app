import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './MenuBar'

function RichTextEditor() {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Jadi Gini...</p>',
        editorProps: {
            attributes: {
                class:'border rounded-md bg-background py-2 px-3 min-h-25'
            }
        }
    })

    return (
        <>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </>
    )
}

export default RichTextEditor