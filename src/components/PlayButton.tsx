import React from "react";

interface BtnProps {
    color?: string;
  buttonName: string;
  onClick: () => void
}

function PlayButton({ color='primary', buttonName, onClick }: BtnProps) {
  return (
    <div>
      <button type="button" className={'btn btn-'+ color} onClick ={onClick}>
        {buttonName}
      </button>
    </div>
  );
}

export default PlayButton;
