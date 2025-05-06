import { TextInput, Button, Group } from "@mantine/core";
import { useForm } from "@tanstack/react-form";

interface MoviewSearchFormProps {
  onSearch: (term: string) => void;
}

function MovieSearchForm({ onSearch }: MoviewSearchFormProps) {
  const form = useForm({
    defaultValues: {
      searchString: "",
    },
    onSubmit: async ({ value }) => {
      onSearch(value.searchString);
    },
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <Group>
          <form.Field
            name="searchString"
            children={({ state, handleChange, handleBlur }) => (
              <TextInput
                defaultValue={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder="Enter your movie name..."
              />
            )}
          ></form.Field>
          <Button type="submit">Search</Button>
        </Group>
      </form>
    </>
  );
}

export default MovieSearchForm;
