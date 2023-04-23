import {useEffect, useState} from "preact/hooks";
import {Input} from "./components/Input.js";
import {InputWithLabel} from "./components/InputWithLabel.js";
import vCardJs from "vcards-js"

export function Form() {
    // const [vCard, setVCard] = useState(vCardJs())
    // const [form, setForm] = useState({
    //     gender: 'Monsieur',
    //     first_name: 'Mohamed Hicham',
    //     last_name: 'Slimani',
    //     phones: [
    //         {
    //             type: 'work',
    //             phone: '0660400496'
    //         },
    //         {
    //             type: 'home',
    //             phone: '0987665653'
    //         }
    //     ],
    //     emails: [
    //         {
    //             type: 'work',
    //             email: 'hicham.slimani@digityourdream.fr',
    //         },
    //         {
    //             type: 'home',
    //             email: 'hicham.slimani.fr@gmail.com',
    //         }
    //     ],
    // })

    const [form, setForm] = useState({})
    const handleFormChange = (properties = {}) => {
        setForm({
            ...form,
            ...properties,
        })
    }

    useEffect(() => {
        const queryString = window.location.search

        const url = new URLSearchParams(queryString)

        const customFormFromQuery = {}

        url.forEach((value, key) => {
            if(key[0] != '_')
                return

            customFormFromQuery[key] = value
        })

        setForm(customFormFromQuery)
    }, [])

    const download = () => {
        const vCard = vCardJs()

        for (const [key, value] of Object.entries(form)) {
            const finalKey = key.substring(1)

            // if(finalKey.includes('.')) {
            //     const keys = finalKey.split('.')
            //     Object.assign()
            // }

            vCard[finalKey] = value
        }

        const blob = new Blob([vCard.getFormattedString()], { type: "text/vcard" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.download = "user-" + Date.now() + ".vcf";
        link.href = url;
        link.click();
    }

    return <>
        <span>{JSON.stringify(form)}</span>
        <br/>
        <button className="px-1 py-2 border rounded bg-gray-400 hover:bg-gray-600" onClick={download}>Télécharger</button>
    </>

    // return <div className="grid grid-cols-2 gap-4 px-5">
    //     <div>
    //         <InputWithLabel
    //             onChange={(e) => handleFormChange({
    //                 first_name: e.target.value
    //             })}
    //             id="first_name"
    //             name="first_name"
    //             value={form.first_name}>Prénom</InputWithLabel>
    //     </div>
    //     <div>
    //         <InputWithLabel
    //             onChange={(e) => handleFormChange({
    //                 last_name: e.target.value
    //             })}
    //             id="last_name"
    //             name="last_name"
    //             value={form.last_name}>Nom</InputWithLabel>
    //     </div>
    //
    //     <div className="col-span-2 w-full">
    //         <div className="flex flex-row space-x-2 items-center justify-between">
    //             <span className="block text-white mb-1">Adresse mail renseigné ({form.emails.length})</span>
    //             <button className="px-2 text-white border rounded hover:shadow-xl shadow transition hover:bg-red-600 bg-red-500">Ajouter une adresse mail</button>
    //         </div>
    //         <div className="grid grid-cols-1 gap-2">
    //             {form.emails.map(({email, type}, index) => <div
    //                 className="flex flex-row w-full space-x-2"
    //                 key={index}>
    //                 <select className="w-1/5 h-auto" name="" id="">
    //                     <option value=""></option>
    //                 </select>
    //                 <InputWithLabel
    //                     onChange={(e) => {
    //                         const emails = form.emails
    //
    //                         emails[index].email = e.target.value
    //
    //                         handleFormChange({
    //                             emails,
    //                         })
    //                     }}
    //                     className="w-4/5"
    //                     id={"emails_" + index}
    //                     name={"emails[" + index + "]"}
    //                     value={email}>Email n°{index + 1}</InputWithLabel>
    //             </div>)}
    //         </div>
    //     </div>
    // </div>
}