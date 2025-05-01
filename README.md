# `<VimScroll />`

This component has the sole purpose of adding a simple vertical scroll behavior from <kbd>J</kbd> and <kbd>K</kbd> keys. The component checks for active inputs in order to not disturb user experience while the person is typing something, for instance.

## Props

### cooldown (number)

Delay in milliseconds for the scroll speed while one of the keys is being held.

```tsx
<VimScroll cooldown={120} />
```

### scrollBy (number)

How much scroll will be applied each time the user presses one of the keys

```tsx
<VimScroll scrollBy={300} />
 ```

### ignoreOn (string[])

On which active elements should scroll inputs be ignored.

```tsx
<VimScroll ignoreOn={['button', 'textarea', 'input']} />
