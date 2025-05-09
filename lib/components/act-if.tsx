import { ReactNode } from 'react';

export default function ActIf({ children, condition }: { children: ReactNode; condition: boolean }): ReactNode | null {
    return condition ? children : null;
}
