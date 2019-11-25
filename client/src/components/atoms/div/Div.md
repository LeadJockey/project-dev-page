
  # Div

  #### *Div 컴포넌트는 ?*
  
  * 스타일드 컴포넌트를 반환하는 일종의 랩퍼 컴포넌트로 설계되었습니다.
  * 반드시 기본 프로퍼티가 설정되어야 합니다.
  
  ***
  
  ## Directory Structure
  
  #### *Components - Atoms - Div*
  
```
.
├── Div.js          - for exporting Div Component
├── Div.md          - for notice
├── Div.stories.js  - for storybook
└── Div.styled.js   - for theming & styling
└── Div.test.js     - for testing
```

  ***
  
  ## Default Properties
  
  #### *컴포넌트의 프로퍼티는 Div.defaultProps 에 정의 되어야 합니다.*
  
  | key | value |
  | --- | --- |
  ${defaultProps}
  
  ***
  
  
  ## Theme
  
  #### *스타일드 컴포넌트는 내부에서 정의된 CSS를 사용합니다.*
  
  ${themeTypes}
  
