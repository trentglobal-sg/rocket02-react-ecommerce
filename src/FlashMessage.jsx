import { useFlashMessage } from "./FlashMessageStore"

export default function FlashMessage() {
    const {flashMessage}= useFlashMessage();
    return flashMessage.message && <div  class={`flash-alert alert alert-${flashMessage.type}`}>
        {flashMessage.message}
    </div>
}