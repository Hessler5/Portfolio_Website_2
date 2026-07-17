interface ComponentContainerProps {
    components: Array<React.ReactElement>
}

export default function ComponentContainer(props: ComponentContainerProps) {
        return (
        <div className="border-b-2 border-b-white border-r-2 border-r-white border-t-2 border-t-black border-l-2 border-l-black bg-white p-2 flex flex-wrap gap-4 justify-center">
            {props.components}
        </div>
    )
}