'use client';

import SelectAction from './SelectAction';

const PlayerSection = ({ actions, selected, handleMatch }) => {

  return (
    <div className="flex flex-col items-center w-full gap-2">
      <span className="text-xs font-medium">Pilih salah satu</span>
      <div className="flex gap-2 justify-center w-full">
        {actions.map(item => (
          <SelectAction 
            key={item} 
            name={item}
            selected={selected}
            handleSelect={handleMatch}
          />
        ))}
      </div>
    </div>
  )
}

export default PlayerSection