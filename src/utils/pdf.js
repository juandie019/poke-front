export const downloadPdf = (arraybufferPDF, fileName) => {
  const url = window.URL.createObjectURL(new Blob([arraybufferPDF]));
  const link = document.createElement("a");

  link.href = url;
  link.setAttribute("download", `${fileName || "file"}.pdf`); //or any other extension
  document.body.appendChild(link);
  link.click();
};
