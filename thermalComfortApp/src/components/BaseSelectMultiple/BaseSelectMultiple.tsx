import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './BaseSelectMultiple.css';

function BaseSelectMultiple(props: any) {
    const { optionsList, onChange, value, err } = props;

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
                labelId="base-select-mult-label"
                displayEmpty
                multiple
                value={value}
                onChange={onChange}
                error={err}
            >
                <MenuItem value="" disabled>
                    <em>Select All That Apply</em>
                </MenuItem>
                {optionsList.map( (option: any) => (
                    <MenuItem value={option.val}>{option.val}</MenuItem>
                ))}
            </Select>
        </StyledFormControl>
    )   
};

export default BaseSelectMultiple

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