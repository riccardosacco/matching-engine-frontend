import React from 'react'

type TextResponseProps = {
  id: string,
  label: string,
  value: string,
  rows?: number,
  onChange?: (e: React.ChangeEvent) => any
}

const TextResponse: React.FC<TextResponseProps> = ({
  id,
  label,
  value,
  rows,
  onChange
  
}) => {

  const copyClipboard = () => {
      /* Get the text field */
      const copyText = document.getElementById(id) as HTMLTextAreaElement;
    
      /* Select the text field */
      if(copyText){
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      }
    
      /* Copy the text inside the text field */
      document.execCommand("copy");
  }
  return (
    <div className="form-group">
      <div className="d-flex justify-content-between align-items-center mb-1">
        <label className="m-0" htmlFor={id}>{label}</label>
        <div>
          <input className="btn btn-sm btn-secondary" type="button" value="Copy" onClick={copyClipboard}/>
        </div>
      </div>
      <textarea className="form-control" id={id} rows={rows} onChange={onChange} value={JSON.stringify(value, null, 2)}></textarea>
    </div>
  )
}

export default TextResponse
