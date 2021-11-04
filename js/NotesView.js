export default class fileView {
    constructor(root, { onfileelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root;
        this.onfileelect = onfileelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;
        // this.root.innerHTML = `
        //     <div class="file__sidebar">
        //         <button class="file__add" type="button">Add Note</button>
        //         <div class="file__list"></div>
        //     </div>
        //     <div class="file__preview">
        //         <input class="file__title" type="text" placeholder="New Note...">
        //         <textarea class="file__body">Take Note...</textarea>
        //     </div>
        // `;

        const btnAddNote = this.root.querySelector(".file_add");
        const inpTitle = this.root.querySelector(".file_title");
        const inpBody = this.root.querySelector(".file_body");

        btnAddNote.addEventListener("click", () => {
            this.onNoteAdd();
        });

        [inpTitle, inpBody].forEach(inputField => {
            inputField.addEventListener("blur", () => {
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value.trim();

                this.onNoteEdit(updatedTitle, updatedBody);
            });
        });

        this.updateNotePreviewVisibility(false);
    }

    _createListItemHTML(id, title, body, updated) {
        const MAX_BODY_LENGTH = 60;

        return `
            <div class="file_list-item" data-note-id="${id}">
                <div class="file_small-title">${title}</div>
                <div class="file_small-body">
                    ${body.substring(0, MAX_BODY_LENGTH)}
                    ${body.length > MAX_BODY_LENGTH ? "..." : ""}
                </div>
                <div class="file_small-updated">
                    ${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short" })}
                </div>
            </div>
        `;
    }

    updateNoteList(file) {
        const fileListContainer = this.root.querySelector(".file_list");

        // Empty list
        fileListContainer.innerHTML = "";

        for (const note of file) {
            const html = this._createListItemHTML(note.id, note.title, note.body, new Date(note.updated));

            fileListContainer.insertAdjacentHTML("beforeend", html);
        }

        // Add select/delete events for each list item
        fileListContainer.querySelectorAll(".file_list-item").forEach(noteListItem => {
            noteListItem.addEventListener("click", () => {
                this.onfileelect(noteListItem.dataset.noteId);
            });

            noteListItem.addEventListener("dblclick", () => {
                const doDelete = confirm("Are you sure you want to delete this file?");

                if (doDelete) {
                    this.onNoteDelete(noteListItem.dataset.noteId);
                }
            });
        });
    }

    updateActiveNote(note) {
        this.root.querySelector(".file_title").value = note.title;
        this.root.querySelector(".file_body").value = note.body;

        this.root.querySelectorAll(".file_list-item").forEach(noteListItem => {
            noteListItem.classList.remove("file_list-item--selected");
        });

        this.root.querySelector(`.file_list-item[data-note-id="${note.id}"]`).classList.add("file_list-item--selected");
    }

    updateNotePreviewVisibility(visible) {
        this.root.querySelector(".file_preview").style.visibility = visible ? "visible" : "hidden";
    }
}
