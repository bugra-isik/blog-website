/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin"
import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { EditorState } from "lexical"

import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin"
import ToolbarPlugin from "./plugins/ToolbarPlugin"
import theme from "./theme"

function Placeholder() {
  return <div className="editor-placeholder">Type here...</div>
}

const editorConfig = {
  namespace: "Text Editor",
  nodes: [],
  // Handling of errors during update
  onError(error: Error) {
    throw error
  },
  // The editor theme
  theme: theme,
}

export default function TextEditor({
  setEditorState,
}: {
  setEditorState: React.Dispatch<React.SetStateAction<string | undefined>>
}) {
  return (
    <div className={`w-full mb-20`}>
      <LexicalComposer initialConfig={editorConfig}>
        <div className="h-full w-full">
          <ToolbarPlugin />
          <div className="editor-inner">
            <RichTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
              placeholder={<Placeholder />}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
            <OnChangePlugin
              onChange={(editorState: EditorState) => {
                const editorStateJSON = editorState.toJSON()
                setEditorState(JSON.stringify(editorStateJSON))
              }}
            />
          </div>
        </div>
      </LexicalComposer>
    </div>
  )
}
