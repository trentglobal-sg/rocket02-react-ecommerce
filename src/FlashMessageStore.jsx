// a Jotai atom is a piece of data
// that is shared across components
import { atom, useAtom } from 'jotai';

// create the atom
const flashMessageAtom = atom({
    message: '',
    type: 'info'
})

// create a hook 
// - a hook is how React components share
// functions with each other
export const useFlashMessage = () => {
    // useAtom to get the current atom's value and the mutator
    // to change the atom
    const [flashMessage, setFlashMessage] = useAtom(flashMessageAtom);

    const showMessage = (message, type="info" ) => {
        setTimeout(()=>{
            clearMessage();
        }, 6000);

        setFlashMessage({
            message, type
        })
    }

    const clearMessage = () => {
        setFlashMessage({
            message: '',
            type: 'info'
        })
    }

    return {
        showMessage,
        flashMessage,
        clearMessage
    }
}