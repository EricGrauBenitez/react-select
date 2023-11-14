import styles from './select.module.css'

type SelectOption = {
    label: string
    value: string
}

type SelectProps = {
    options: SelectOption[]
    onChange:(value: SelectOption | undefined) => void
    value?: SelectOption
}


export function Select({ value, onChange, options }: SelectProps) {
    return (
        <>
        <div className="container">
            Wrong
        </div>
        <div className={styles.container}>
            Right
        </div>
        </>
    )
}