import Modal from "@mui/material/Modal"
import { useState } from "react"
import { VscClose } from "react-icons/vsc"
import TextEditor from "./TextEditor"

export default function WritePost() {
  const [editorState, setEditorState] = useState<string>()

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  
  return (
    <>z
      <button
        className={`bg-c1/50 px-4 py-2 border border-white rounded-lg hover:bg-white/10 transition-colors`}
        onClick={handleOpen}
      >
        Write a Post
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={`flex items-center justify-center`}
      >
        <section
          className={`size-4/5 bg-c2 text-white flex flex-col rounded-lg font-openSans overflow-auto `}
        >
          <VscClose
            className={`text-3xl self-end m-4 cursor-pointer`}
            onClick={handleClose}
          />
          <div className={`p-16 flex flex-col gap-16 text-white items-center`}>
            <div className={`flex flex-col gap-4`}>
              <div className={`flex justify-between gap-4`}>
                <div className={`flex flex-col gap-4 grow`}>
                  <h1 className={`text-xl `}>Title</h1>
                  <input
                    type="text"
                    className={`h-10 text-white bg-white/25 px-4 rounded focus:outline-none`}
                  />
                </div>
                <div className={`flex flex-col gap-4 grow`}>
                  <h1 className={`text-xl`}>Author</h1>
                  <input
                    type="text"
                    className={`h-10 text-white bg-white/25 px-4 rounded focus:outline-none`}
                  />
                </div>
              </div>
              <div className={`flex flex-col gap-4`}>
                <h1 className={`text-xl`}>
                  Tags
                  <span className={`text-white/50 ml-1`}>
                    (separate with comma)
                  </span>
                </h1>
                <input
                  type="text"
                  className={`h-10 text-white bg-white/25 px-4 rounded focus:outline-none`}
                />
              </div>
              <div className={`flex items-center gap-4`}>
                <div className={`flex flex-col gap-4`}>
                  <h1 className={`text-xl`}>
                    Reading time{" "}
                    <span className={`text-white/50 ml-1`}>(minutes)</span>
                  </h1>
                  <input
                    type="text"
                    className={`h-10 w-16 text-white bg-white/25 px-4 rounded focus:outline-none`}
                  />
                </div>
                <div className={`flex flex-col gap-4`}>
                  <h1 className={`text-xl`}>Main Image</h1>
                  <input
                    id="hiddenInput"
                    type="file"
                    accept="image/*"
                    className={`h-10 hidden text-white bg-white/25 px-4 rounded focus:outline-none`}
                  />
                  <button
                    onClick={() =>
                      document.getElementById("hiddenInput")?.click()
                    }
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
            <TextEditor setEditorState={setEditorState}/>
            <button className={`text-xl px-4 py-2 border rounded-lg w-min`}>Post</button>
          </div>
        </section>
      </Modal>
    </>
  )
}
