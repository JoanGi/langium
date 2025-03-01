/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/

import { AstNodeDescription, DefaultScopeProvider, Scope, SimpleScope, Stream } from 'langium';

/**
 * Special scope provider that matches symbol names regardless of lowercase or uppercase.
 */
export class ArithmeticsScopeProvider extends DefaultScopeProvider {

    protected createScope(elements: Stream<AstNodeDescription>, outerScope: Scope): Scope {
        return new SimpleScope(elements, outerScope, { caseInsensitive: true });
    }

    protected getGlobalScope(referenceType: string): Scope {
        return new SimpleScope(this.indexManager.allElements(referenceType), undefined, { caseInsensitive: true });
    }

}
