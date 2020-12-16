import React from "react"
import { ControlLabel, FormControl, FormControlProps, FormGroup, HelpBlock, Icon, InputGroup } from "rsuite"
import { SVGIcon } from "rsuite/lib/@types/common"
import { IconNames } from "rsuite/lib/Icon"

export interface FormItemProps extends FormControlProps {
    add_on_icon?: IconNames | SVGIcon,
    message?: string,
    error_message?: string,
    placeholder?: string,
}

const FromItem = ({ name, message, label, add_on_icon, ...extraProps }: FormItemProps) => {
    if (add_on_icon) {
        return (
            <FormGroup>
                <InputGroup inside>
                    {label ? <ControlLabel>{label}</ControlLabel> : ''}
                    <FormControl name={name}  {...extraProps} />
                    <InputGroup.Addon>
                        <Icon icon={add_on_icon} />
                    </InputGroup.Addon>
                </InputGroup >
                {message ? <HelpBlock tooltip>{message}</HelpBlock> : ''}
            </FormGroup>
        )
    }

    return (
        <FormGroup>
            {label ? <ControlLabel>{label}</ControlLabel> : ''}
            <FormControl name={name}  {...extraProps} />
            {add_on_icon ? <InputGroup.Addon>
                <Icon icon={add_on_icon} />
            </InputGroup.Addon> : ''}
            {message ? <HelpBlock tooltip>{message}</HelpBlock> : ''}
        </FormGroup >
    )
}

export default FromItem
