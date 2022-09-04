import React from 'react'

const Table = () => {
  return (
    <div class="">
        <table class="table-fixed w-full p-2">
            <thead class="h-14">
                <tr class="text-[#3120E0] bg-gray-400">
                    <th>ID</th>
                    <th>FROM</th>
                    <th>TO</th>
                    <th>DATE</th>
                    <th>TYPE</th>
                    <th>TAG</th>
                    <th>AMOUNT</th>
                </tr>
            </thead>
            <tbody class="">
                <tr class="text-center h-10">
                    <td>---</td>
                    <td>---</td>
                    <td>---</td>
                    <td>---</td>
                    <td>---</td>
                    <td>---</td>
                    <td>---</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table