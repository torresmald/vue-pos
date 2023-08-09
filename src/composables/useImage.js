import { useFirebaseStorage } from 'vuefire'
import { ref as refStorage, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { uid } from 'uid'
import { ref, computed } from 'vue'

export default function useImage() {

    const storage = useFirebaseStorage()
    const url = ref(null);

    const onFileChange = event => {

        const file = event.target.files[0];
        const filename = uid() + '.jpg'

        const sRef = refStorage(storage, '/products/' + filename)

        const upload = uploadBytesResumable(sRef, file)

        upload.on('state_changed',
            () => { },
            (error) => console.log(error),
            async () => url.value = await getDownloadURL(upload.snapshot.ref)
        )
    }

    const isUploaded = computed(() => {
        return url.value ? url.value : null
    })

    return {
        onFileChange,
        isUploaded,
        url
    }
}