import { useCallback, useState } from 'react';


type UseTogglerType = [boolean, (togglerState?: boolean | null) => void]

const useToggler = (initialValue: boolean) : UseTogglerType => {
    const [toggler, setToggler] = useState(initialValue);

    const toggle = useCallback((togglerState = null): void => {
        if(togglerState !== undefined) setToggler(togglerState) 
        else setToggler(!toggler)
    }, [toggler])

    return [toggler, toggle]
}

export default useToggler;