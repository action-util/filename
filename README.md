# Clean Name JavaScript action

This action takes a string and turns it into a name suitable for upload as an
artifact.

## Inputs

### `dirty`

**Required** The string to clean.

## Outputs

### `clean`

The cleaned name.

## Example usage

```yaml
uses: nu-rust-course/clean-name@master
with:
  dirty: doc-${{ github.repository }}
```
