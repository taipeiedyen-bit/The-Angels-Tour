import create from 'zustand';

interface DialogueState {
    dialogues: string[];
    addDialogue: (dialogue: string) => void;
    clearDialogues: () => void;
}

const useDialogueStore = create<DialogueState>((set) => ({
    dialogues: [],
    addDialogue: (dialogue) => set((state) => ({ dialogues: [...state.dialogues, dialogue] })),
    clearDialogues: () => set({ dialogues: [] }),
}));

export default useDialogueStore;