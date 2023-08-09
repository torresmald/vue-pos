import {generateClasses} from '@formkit/themes'

const config = {
    config: {
        classes: generateClasses({
            global: {
                label: 'block mb-2 font-bold text-xl',
                message: 'text-red-500 uppercase font-bold mb-5',
                wrapper: 'space-y-2 mb-3',
                input: 'w-full p-3 border border-gray-300 rounded text-gray-700 placeholder-gray-400'
            },
            file: {
                noFiles: 'block my-2',
                fileItem: 'hidden'
            },
            submit: {
                input: '$reset bg-green-400 hover:bg-green-700 w-full p-2 font-bold uppercase disabled:opacity-50'
            } 
        })
    }
}

export default config