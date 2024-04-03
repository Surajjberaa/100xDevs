export const RevenueCard = ({
    title,
    Amount,
    Orders
}) => {
    return(
        <div className="bg-white rounded shadow-md p-4">
            <div className="text-gray-700 ">{title}</div>
            <div className="flex justify-between pt-2">

            <div className="flex justify-between font-semibold text-2xl">{Amount}</div>
            <div>{Orders ? <div className="flex">
                <div className="text-blue-700 cursor-pointer underline font-medium flex flex-col justify-center">
                    {Orders} Order(s)
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                    </svg>

                </div>
            </div>:null}</div>
            </div>

        </div>
    )
}