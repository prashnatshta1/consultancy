"use client"

import { useState, useRef, useEffect } from 'react'
import { Bold, Italic, Underline, List, ListOrdered, AlignLeft, AlignCenter, AlignRight } from 'lucide-react'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export default function RichTextEditor({ value, onChange, placeholder = "Enter content...", className = "" }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || ''
    }
  }, [value])

  const execCommand = (command: string, value?: string) => {
    if (!editorRef.current) return
    
    editorRef.current.focus()
    try {
      const success = document.execCommand(command, false, value)
      if (!success) {
        console.warn(`execCommand '${command}' failed`)
      }
      setTimeout(() => handleContentChange(), 10)
    } catch (error) {
      console.warn('execCommand failed:', error)
    }
  }

  const handleContentChange = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text/plain')
    document.execCommand('insertText', false, text)
  }

  const toolbarButtons = [
    { icon: Bold, command: 'bold', title: 'Bold' },
    { icon: Italic, command: 'italic', title: 'Italic' },
    { icon: Underline, command: 'underline', title: 'Underline' },
    { icon: List, command: 'insertUnorderedList', title: 'Bullet List' },
    { icon: ListOrdered, command: 'insertOrderedList', title: 'Numbered List' },
    { icon: AlignLeft, command: 'justifyLeft', title: 'Align Left' },
    { icon: AlignCenter, command: 'justifyCenter', title: 'Align Center' },
    { icon: AlignRight, command: 'justifyRight', title: 'Align Right' },
  ]

  return (
    <>
      <div className={`border border-gray-300 rounded-lg overflow-hidden ${isFocused ? 'ring-2 ring-teal-500' : ''} ${className}`}>
        {/* Toolbar */}
        <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-gray-50">
          {toolbarButtons.map(({ icon: Icon, command, title }) => (
            <button
              key={command}
              type="button"
              onClick={() => execCommand(command)}
              className="p-2 hover:bg-gray-200 rounded transition-colors"
              title={title}
            >
              <Icon className="w-4 h-4 text-gray-600" />
            </button>
          ))}
          <div className="w-px h-6 bg-gray-300 mx-1" />
          <select
            onChange={(e) => execCommand('formatBlock', e.target.value)}
            className="px-2 py-1 text-sm bg-transparent border-0 focus:outline-none text-gray-700"
          >
            <option value="div">Normal</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="p">Paragraph</option>
          </select>
        </div>

        {/* Editor */}
        <div
          ref={editorRef}
          contentEditable
          onInput={handleContentChange}
          onPaste={handlePaste}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="min-h-[200px] p-4 focus:outline-none text-gray-900 editor-content"
          style={{ wordBreak: 'break-word' }}
          suppressContentEditableWarning={true}
          data-placeholder={placeholder}
        />
      </div>
      
      <style jsx>{`
        .editor-content:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
          pointer-events: none;
          font-style: italic;
        }
        .editor-content p {
          margin: 0.5em 0;
        }
        .editor-content h1 {
          font-size: 2em;
          font-weight: bold;
          margin: 0.5em 0;
        }
        .editor-content h2 {
          font-size: 1.5em;
          font-weight: bold;
          margin: 0.5em 0;
        }
        .editor-content h3 {
          font-size: 1.2em;
          font-weight: bold;
          margin: 0.5em 0;
        }
        .editor-content ul, .editor-content ol {
          margin: 0.5em 0;
          padding-left: 2em;
        }
        .editor-content li {
          margin: 0.2em 0;
        }
        .editor-content b, .editor-content strong {
          font-weight: bold;
        }
        .editor-content i, .editor-content em {
          font-style: italic;
        }
        .editor-content u {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}