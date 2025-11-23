"use client";

import { useState, useRef, useEffect } from "react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link2,
} from "lucide-react";

interface WysiwygEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function WysiwygEditor({
  value,
  onChange,
  placeholder = "Paste content here...",
  className = "",
}: WysiwygEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  // Sync external value -> editor HTML
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || "";
    }
  }, [value]);

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleContentChange();
  };

  const handleContentChange = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  // -----------------------------
  // PERFECT PASTE HANDLER (Fixed)
  // Removes ONLY background-color
  // Keeps other formatting: bold, images, links, headings
  // -----------------------------
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();

    const html = e.clipboardData.getData("text/html");
    const text = e.clipboardData.getData("text/plain");

    if (html) {
      const temp = document.createElement("div");
      temp.innerHTML = html;

      // Remove all styling and force black text
      temp.querySelectorAll("*").forEach((el) => {
        if (el instanceof HTMLElement) {
          el.removeAttribute('style');
          el.style.color = '#000000';
          el.style.backgroundColor = 'transparent';
        }
      });

      document.execCommand("insertHTML", false, temp.innerHTML);
    } else {
      document.execCommand("insertText", false, text);
    }

    setTimeout(handleContentChange, 0);
  };

  const handleLinkInsert = () => {
    const url = prompt("Enter URL:");
    if (url) execCommand("createLink", url);
  };

  const toolbarButtons = [
    { icon: Bold, command: "bold", title: "Bold" },
    { icon: Italic, command: "italic", title: "Italic" },
    { icon: Underline, command: "underline", title: "Underline" },
    { icon: List, command: "insertUnorderedList", title: "Bullet List" },
    { icon: ListOrdered, command: "insertOrderedList", title: "Numbered List" },
    { icon: AlignLeft, command: "justifyLeft", title: "Align Left" },
    { icon: AlignCenter, command: "justifyCenter", title: "Align Center" },
    { icon: AlignRight, command: "justifyRight", title: "Align Right" },
  ];

  return (
    <>
      <div
        className={`border border-gray-300 rounded-lg overflow-hidden ${
          isFocused ? "ring-2 ring-teal-500" : ""
        } ${className}`}
      >
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

          {/* Divider */}
          <div className="w-px h-6 bg-gray-300 mx-1" />

          {/* Headings */}
          <select
            onChange={(e) => execCommand("formatBlock", e.target.value)}
            className="px-2 py-1 text-sm bg-transparent border-0 focus:outline-none text-gray-700"
          >
            <option value="p">Paragraph</option>
            <option value="h1">H1</option>
            <option value="h2">H2</option>
            <option value="h3">H3</option>
          </select>

          {/* Insert Link */}
          <button
            type="button"
            onClick={handleLinkInsert}
            className="p-2 hover:bg-gray-200 rounded"
            title="Insert Link"
          >
            <Link2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Editable Area */}
        <div
          ref={editorRef}
          contentEditable
          onInput={handleContentChange}
          onPaste={handlePaste}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="min-h-[300px] p-4 focus:outline-none text-gray-900 editor-content"
          style={{ wordBreak: "break-word" }}
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

        /* Ensure images scale properly */
        .editor-content img {
          max-width: 100%;
          height: auto;
          margin: 10px 0;
          display: block;
        }

        /* Tables */
        .editor-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 16px 0;
        }

        .editor-content table th,
        .editor-content table td {
          border: 1px solid #ddd;
          padding: 8px;
        }

        /* Default text color */
        .editor-content {
          color: #000000;
        }
        
        .editor-content * {
          background: transparent !important;
          color: #000000 !important;
        }

        /* Links */
        .editor-content a {
          color: #0070f3;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
