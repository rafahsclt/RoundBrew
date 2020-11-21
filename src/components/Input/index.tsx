import React, { useState, useCallback, useEffect, useRef, useImperativeHandle, forwardRef, useMemo } from 'react'
import { TextInputProps, Text } from 'react-native'
import { useField } from '@unform/core'

import { Container, TextInput, LabelView, Label } from './styles'

interface InputProps extends TextInputProps {
    name: string
    tag: string
    width?: string
}

interface InputValueReference {
    value: string
}

interface InputRef {
    focus(): void
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = ({ name, tag, defaultValue, width='100%',...rest }, ref) => {

    const { registerField, fieldName, error } = useField(tag)
    const inputElementRef = useRef<any>(null)
    const inputValueRef = useRef<InputValueReference>({ value: '' })

    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(defaultValue ? true : false)

    useImperativeHandle(ref, () => ({ 
        focus() {
            inputElementRef.current.focus()
        }
    }))

    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false)

        setIsFilled(!!inputValueRef.current.value)
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputValueRef.current,
            path: 'value',
            setValue(ref: any, value: string) {
                inputValueRef.current.value = value
                inputElementRef.current.setNativeProps({ text: value })
            },
            clearValue() {
                inputValueRef.current.value = ''
                inputElementRef.current.clear()
            }
        })
        
        if(defaultValue) {
            inputValueRef.current.value = defaultValue
            inputElementRef.current.setNativeProps({ text: defaultValue })
        }
    }, [fieldName, registerField])

    return (
        <Container
            isFocused={isFocused}
            isFilled={isFilled}
            width={width}
        >
            <LabelView
                isFocused={isFocused}
                isFilled={isFilled}
            >
                <Label
                    isFocused={isFocused}
                    isFilled={isFilled}
                >{name}</Label>
            </LabelView>
            <TextInput
                ref={inputElementRef}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChangeText={value => inputValueRef.current.value = value}
                autoCorrect={false}
                {...rest}
            />
        </Container>
    )
}

export default forwardRef(Input)