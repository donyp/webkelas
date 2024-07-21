import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Slider from "@mui/material/Slider"
import { getFirestore, collection, addDoc } from "firebase/firestore"

const units = ["/Rating/1.png", "/Rating/2.png", "/Rating/3.png", "/Rating/4.png", "/Rating/5.png"]

// Inisialisasi Firestore
const db = getFirestore()

export default function Rating() {
    const [value, setValue] = React.useState(() => {
        // Cek jika ada nilai peringkat terakhir di localStorage
        const lastRating = localStorage.getItem("lastRating")
        return lastRating ? parseFloat(lastRating) : 5.0
    })

    const [remainingRatings, setRemainingRatings] = React.useState(() => {
        // Cek jika ada informasi jumlah rating yang tersisa di localStorage
        const remaining = localStorage.getItem("remainingRatings")
        return remaining ? parseInt(remaining, 10) : 3 // Defaultnya adalah 3 kali rating
    })

    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const handleChange = (event, newValue) => {
        if (typeof newValue === "number" && remainingRatings > 0) {
            setValue(newValue)
        }
    }

    const handleSliderChange = async (event, newValue) => {
        if (typeof newValue === "number" && remainingRatings > 0 && !isSubmitting) {
            setIsSubmitting(true)
            setValue(newValue)

            try {
                const docRef = await addDoc(collection(db, "ratings"), {
                    value: newValue,
                    timestamp: new Date(),
                })
                console.log("Document written with ID: ", docRef.id)

                // Mengurangi sisa rating yang tersisa
                const newRemainingRatings = remainingRatings - 1
                setRemainingRatings(newRemainingRatings)

                // Simpan nilai rating terakhir ke localStorage
                localStorage.setItem("lastRating", newValue.toString())
                // Simpan informasi jumlah rating yang tersisa ke localStorage
                localStorage.setItem("remainingRatings", newRemainingRatings.toString())
            } catch (e) {
                console.error("Error adding document: ", e)
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    const imgIndex = Math.min(Math.floor(value / 2), units.length - 1) // Mengambil indeks terakhir jika melebihi panjang array

}
