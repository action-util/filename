# Split Path JavaScript action

This action takes a string splits at the last slash character, if any.

## Inputs

### `path`

**Required** The path to clean.

## Outputs

### `dirname`

Everything before the last slash, or nothing if there is no slash.

### `basename`

Everything after the last slash, or everything if there is no slash.

## Example usage

```yaml
uses: action-util/split-path@master
with:
  path: ${{ github.repository }}
```
