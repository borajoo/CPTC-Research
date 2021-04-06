import React, { useState, useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './BaseSelectOne.css';

function BaseSelectOne(props: any) {
    const { optionsList, onChange, value } = props;

    const StyledFormControl = withStyles({
        root: {
            color: '#124B35',
            width: '300px',
            margin: '0px auto 20px auto',
        },
        focused: {
            color: '#124B35',
        }
    })(FormControl);

    return (
        <StyledFormControl>
            <Select
                labelId="base-select-one-label"
                // displayEmpty
                value={value}
                onChange={onChange}
            >
                <MenuItem value="" disabled>
                    <em>Select One</em>
                </MenuItem>
                {optionsList.map( (option: any) => (
                    <MenuItem value={option.val}>{option.val}</MenuItem>
                ))}
            </Select>
        </StyledFormControl>
    )   
};

export default BaseSelectOne

// const[defaultText, setDefaultText] = useState(props.defaultText)
//     const [showList, setShowList] = useState(false);

//     useEffect(() => {
//         window.addEventListener('mousedown', handleClickOutside);

//         return () => {
//             window.removeEventListener('mousedown', handleClickOutside);
//         };
//       }, []);

//     const handleClickOutside = (e: any) => {
//         if (
        //   !e.target.classList.contains("custom-select-option") &&
        //   !e.target.classList.contains("selected-text")
//         ) {
//           setShowList(false);
//         }
//       };

//     const handleOptionClick = (e: any) => {
//         setDefaultText(e.target.getAttribute("data-name"));
//         setShowList(false);
//     };


//     return (
//         <div>
//             <label className="baseselectlabel">{props.label}</label>
//             <div
//                 className={showList ? "selected-text active" : "selected-text"}
//                 onClick={() => { setShowList(!showList) }}
//              >
//                 {defaultText}
//             </div>
//             {showList && (
//                 <ul className="select-options">
//                     {optionsList.map((option: any) => {
//                         return (
//                             <li
//                                 className="custom-select-option"
//                                 data-name={option.name}
//                                 key={option.id}
//                                 onClick={handleOptionClick}
//                             >
//                                 {option.name}
//                             </li>
//                         );
//                     })}
//                 </ul>
//             )}
//         </div>
//     )