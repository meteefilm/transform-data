export const onCopyText = (text) => {
    // // let hiddenField = document.createElement('input');
    // var copyText = document.getElementById("copyId");
    // copyText.setAttribute('value', text);

    // copyText.select();
    // // copyText.setSelectionRange(0, 999999); // For mobile devices
    // navigator.clipboard.writeText(copyText.value);
    // // navigator.clipboard.writeText(text);

    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
};

// export function onCopyText(text) {
//     const textArea = document.createElement("textarea");
//     textArea.value = text;
//     document.body.appendChild(textArea);
//     textArea.focus();
//     textArea.select();
//     try {
//       document.execCommand('copy');
//     } catch (err) {
//       console.error('Unable to copy to clipboard', err);
//     }
//     document.body.removeChild(textArea);
//   }
