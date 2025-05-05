import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ActIf from './act-if';

describe('ActIf', () => {
    it('Should show children when condition is true', async () => {
        const showSubmit = true;
        render(
            <ActIf condition={showSubmit}>
                <button data-testid="submit">Submit</button>
            </ActIf>,
        );
        expect(await screen.findByTestId('submit')).toBeInTheDocument();
    });

    it('Should not show children when condition is false', () => {
        const showSubmit = false;
        render(
            <ActIf condition={showSubmit}>
                <button data-testid="submit">Submit</button>
            </ActIf>,
        );
        expect(screen.queryByTestId('submit')).not.toBeInTheDocument();
    });
});
