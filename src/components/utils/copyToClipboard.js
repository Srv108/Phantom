export const copyToClipboard = async(text) => {

    try {
        await navigator.clipboard.writeText(text);
        console.log('text copied successfully to clipboard');

    } catch (error) {
        console.log('error comes in coping it to clipboard',error);
    }
}