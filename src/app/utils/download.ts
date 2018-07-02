

/**
 * download
 * @param content 文件内容
 * @param filename 文件名称
 */
export function funDownload(content, filename = 'template.html') {
    let eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';

    let blob = new Blob([content]);
    eleLink.href = URL.createObjectURL(blob);

    document.body.appendChild(eleLink);
    eleLink.click();
    document.body.removeChild(eleLink);
}