import { UseFormSetValue } from 'react-hook-form';
import { formulario } from './enviar';

export const textoParaData = () => {
    const dataInput = document.getElementById('dataSelect');
    dataInput?.parentElement?.focus();

    if(dataInput?.getAttribute('type') === 'date') {
        dataInput.click();
        return;
    }

    dataInput?.setAttribute('type', 'date');
    setTimeout(() => { dataInput?.click(); }, 100);
}

/*----------------------------------------------------------------------------*/

export const selecionarTurno = (elem: HTMLButtonElement, setValue: UseFormSetValue<formulario>, form: formulario) => {
    const almoco = document.getElementById('almoco');
    const janta = document.getElementById('janta');
    const data = document.getElementById('dataSelect');

    if(elem === almoco) {
        if(janta?.classList.contains('turnoSelecionado')) janta.classList.toggle('turnoSelecionado');
        
        if(elem.classList.contains('turnoSelecionado')) {
            elem.classList.remove('turnoSelecionado');
            data?.toggleAttribute('required', false);
            if(!form.data) data?.setAttribute('type', 'text');
            setValue('turno', '----');
        }
        else {
            elem.classList.add('turnoSelecionado');
            data?.toggleAttribute('required', true);
            data?.setAttribute('type', 'date');
            textoParaData();
            setValue('turno', 'Almoço');
        }
    }
    else {
        if(almoco?.classList.contains('turnoSelecionado')) almoco.classList.toggle('turnoSelecionado')

        if(elem.classList.contains('turnoSelecionado')) {
            elem.classList.remove('turnoSelecionado');
            data?.toggleAttribute('required', false);
            if(!form.data) data?.setAttribute('type', 'text');
            setValue('turno', '----')
        }
        else {
            elem.classList.add('turnoSelecionado');
            data?.toggleAttribute('required', true);
            data?.setAttribute('type', 'date');
            textoParaData();
            setValue('turno', 'Jantar');
        }
    }
}