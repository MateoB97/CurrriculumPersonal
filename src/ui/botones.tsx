import clsx from 'clsx';
import { Button } from '@/src/ui/button';
// import { useState } from 'react';
import { Modal } from '@/src/ui/dialogo'
import { useModal } from '@/src/services/useModal';

export function FormularioBoton (
    {
        children,
        estiloInput,
        type
    }: {
        children: React.ReactNode;
        estiloInput?: string;
        type: 'button' | 'submit' | 'reset' | undefined;
    }
    ) {
        return (
            <Button 
                className={
                    clsx('w-[fit-content] mb-[2vh] bg-purple-custom_1 border-1 border-solid rounded-lg cursor-pointer p-[1.5%] min-h-[5vh] max-h-[8vh] hover:bg-[#007BFF] text-white',
                        estiloInput?.toString()
                    )
                }
                type={type}
            >{children}</Button>
        );
}

export function AccionBoton () {
    return (
        <button>Accion</button>
    );
}

export function PreviewImagen ({
    children
}: 
{
    children: React.ReactNode;
}) {
    const { ref, onOpen, onClose } = useModal();
    // const [isHover, setHover] = useState(false);

    return (
        <div className='py-4 flex flex-col items-center '>
            <button 
                className={clsx(
                    'w-[80%] hover:blur-sm'
                )}
                onClick={onOpen}
            >
                {children}
            </button>
            <Modal ref={ref} onClose={onClose}>
                {children}
            </Modal>
        </div>
    );
}