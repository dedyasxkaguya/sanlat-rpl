import React from 'react'

const Today = () => {
    const d = new Date()
    const transDay = (i: number) => {
        if (i == 1) {
            return "Minggu"
        } else if (i == 2) {
            return "Senin"
        } else if (i == 3) {
            return "Selasa"
        } else if (i == 4) {
            return "Rabu"
        } else if (i == 5) {
            return "Kamis"
        } else if (i == 6) {
            return "Jum'at"
        } else if (i == 7) {
            return "Sabtu"
        } else {
            return "Something wrong"
        }
    }
    const transMonth = (i: number) => {
        if (i == 0) {
            return "Januari"
        } else if (i == 1) {
            return "Februari"
        } else if (i == 2) {
            return "Maret"
        } else if (i == 3) {
            return "April"
        } else if (i == 4) {
            return "Mei"
        } else if (i == 5) {
            return "Juni"
        } else if (i == 6) {
            return "Juli"
        } else if (i == 7) {
            return "Agustus"
        } else if (i == 8) {
            return "September"
        } else if (i == 9) {
            return "Oktober"
        } else if (i == 10) {
            return "November"
        } else if (i == 11) {
            return "Desember"
        } else {
            return "Something wrong"
        }
    }
    const date = `${transDay(d.getDay())}, ${d.getDate().toString()} ${transMonth(d.getMonth())}`
    return (
        <span className="text-secondary">
            {date}
        </span>
    )
}

export default Today