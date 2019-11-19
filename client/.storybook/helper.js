const usePropsTable = story => {
  console.log(story)
  return (
    <table>
      <thead>
        <tr>
          <td>{story.name}</td>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  )
}

export { usePropsTable }
