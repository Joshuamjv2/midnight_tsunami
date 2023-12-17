import SingleClient from "./SingleClient"

export default function Clients(){
    return(
        <div className="md:ml-8 mx-4 md:mr-4 md:px-24 py-12">
            <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 overflow-hidden">
                <SingleClient />
                <SingleClient />
                <SingleClient />
                <SingleClient />
                <SingleClient />
                <SingleClient />
                {/* <SingleClient /> */}
                {/* <SingleClient />
                <SingleClient />
                <SingleClient /> */}
            </div>
        </div>
    )
}